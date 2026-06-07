const Anthropic = require('@anthropic-ai/sdk');

const hasApiKey = () => !!process.env.ANTHROPIC_API_KEY;

function parseCleanJson(text) {
  let cleaned = text.trim();
  if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```(json)?/, '').replace(/```$/, '').trim();
  }
  try {
    return JSON.parse(cleaned);
  } catch (error) {
    console.error('Failed to parse AI response as JSON. Raw text:', text);
    throw new Error('AI generated invalid JSON structure. Please try again.');
  }
}

const getClient = () => {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY is not configured. Please add it to your environment variables.');
  }
  return new Anthropic({ apiKey });
};

function generateMockChallenge(context) {
  const sport = context.sport || 'General Fitness';
  const difficulty = context.difficulty || 'intermediate';

  const activeMuscles = (context.activeInjuries || []).map(i => i.muscleGroup.toLowerCase());
  const recurringMuscles = (context.recurringInjuries || []).map(i => i.muscleGroup.toLowerCase());

  const days = [];
  for (let d = 1; d <= 30; d++) {
    let targeted = ['core', 'cardio'];
    let task = '';

    if (d % 3 === 1) {
      targeted = ['legs', 'lower body'];
      const isLegInjured = activeMuscles.some(m =>
        m.includes('leg') || m.includes('hamstring') || m.includes('knee') || m.includes('ankle') || m.includes('calf') || m.includes('quad')
      );
      if (isLegInjured) {
        task = `Light upper-body mobility and core hold (Plank 3 sets of 30s). Leg exercises avoided due to active injury in: ${activeMuscles.join(', ')}.`;
        targeted = ['core', 'shoulders'];
      } else {
        task = `Do 3 sets of 12 bodyweight squats, 3 sets of 10 lunges.`;
        const hasRecurringHamstring = recurringMuscles.some(m => m.includes('hamstring') || m.includes('leg'));
        if (hasRecurringHamstring) {
          task += ` Include 3 sets of 10 glute bridges to target hamstring strengthening.`;
          targeted.push('hamstrings');
        }
      }
    } else if (d % 3 === 2) {
      targeted = ['arms', 'upper body'];
      const isUpperInjured = activeMuscles.some(m =>
        m.includes('arm') || m.includes('shoulder') || m.includes('wrist') || m.includes('chest') || m.includes('elbow')
      );
      if (isUpperInjured) {
        task = `Lower-body stretching, 3 sets of 15 calf raises. Upper-body work skipped due to active injury in: ${activeMuscles.join(', ')}.`;
        targeted = ['legs', 'calves'];
      } else {
        task = `3 sets of 8 pushups, 3 sets of 12 arm circles, 3 sets of 10 dumbbell rows.`;
      }
    } else {
      targeted = ['cardio', 'endurance'];
      task = `Perform 20 minutes of steady state cardio (brisk walk, stationary cycle or light jog targeting ${sport} prep).`;
    }

    days.push({
      day: d,
      task: `[Day ${d}] ${task} Level: ${difficulty}.`,
      muscleGroups: targeted,
      difficulty: difficulty
    });
  }

  return { days };
}


function generateMockRecoveryProtocol(injuryLog, context) {
  const muscle = injuryLog.muscleGroup || 'injured area';
  const type = injuryLog.injuryType || 'injury';

  return {
    phases: [
      {
        phaseNumber: 1,
        name: `Rest & Gentle Mobility for ${muscle} ${type}`,
        durationDays: 7,
        exercises: [
          `Gentle passive stretching of the ${muscle} (hold 15s, 3 reps)`,
          `RICE treatment protocol (Rest, Ice, Compress, Elevate)`,
          `Isometric activation holding for 5 seconds (10 repetitions)`
        ]
      },
      {
        phaseNumber: 2,
        name: `Active Movement & Stability`,
        durationDays: 10,
        exercises: [
          `Active ranges of motion without weight for ${muscle} (15 reps)`,
          `Core alignment planks (hold 30s, 3 reps)`,
          `Light stability exercises`
        ]
      },
      {
        phaseNumber: 3,
        name: `Progressive Strengthening & Return to ${context.sport || 'play'}`,
        durationDays: 14,
        exercises: [
          `Resisted concentric exercises for ${muscle} (3 sets of 8 reps)`,
          `Dynamic balance and core stabilization`,
          `Low impact sport-specific agility drills`
        ]
      }
    ]
  };
}


async function generateChallenge(context) {
  if (!hasApiKey()) {
    console.warn('[AI Mock Mode]: ANTHROPIC_API_KEY is missing. Generating a mocked 30-day challenge plan.');
    return generateMockChallenge(context);
  }

  const anthropic = getClient();

  const systemPrompt = `You are FitGuard's expert AI Sports Trainer. Your goal is to generate a personalized 30-day progressive training plan for an athlete.
You will receive a context object containing their target sport, requested difficulty, injury history, recurring injuries, and active injuries.

CRITICAL SAFETY RULES:
1. AVOID exercises that stress actively injured muscle groups listed under "activeInjuries". Focus on safe alternatives or non-impact work for those areas.
2. INCLUDE target strengthening, stability, and mobility exercises for repeatedly injured muscle groups listed under "recurringInjuries" to rehabilitate and protect them.
3. The generated plan must consist of EXACTLY 30 days. No more, no less.
4. You must output ONLY a valid JSON object matching the schema below. No explanations, no conversation, and no markdown wrapper (except the JSON format itself).

Expected JSON schema:
{
  "days": [
    {
      "day": 1,
      "task": "Perform a 5-minute light jog, 3 sets of 10 glute bridges, 3 sets of 12 bodyweight squats. Focus on core activation.",
      "muscleGroups": ["hamstrings", "glutes", "core"],
      "difficulty": "intermediate"
    }
  ]
}
Each day must specify a "day" number, a detailed "task" string, an array of targeted "muscleGroups", and the "difficulty" level.`;

  const userPrompt = `Generate the 30-day challenge plan based on this athlete context:
${JSON.stringify(context, null, 2)}`;

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    system: systemPrompt,
    messages: [
      { role: 'user', content: userPrompt }
    ],
    temperature: 0.2
  });

  const contentText = response.content[0].text;
  return parseCleanJson(contentText);
}

async function generateRecoveryProtocol(injuryLog, context) {
  if (!hasApiKey()) {
    console.warn('[AI Mock Mode]: ANTHROPIC_API_KEY is missing. Generating a mocked recovery protocol.');
    return generateMockRecoveryProtocol(injuryLog, context);
  }

  const anthropic = getClient();

  const systemPrompt = `You are FitGuard's AI Sports Rehabilitation Specialist. Your goal is to generate a phased return-to-play recovery protocol for an athlete's specific injury.
You will receive the injury details and the athlete's full injury history context.

CRITICAL Rehab RULES:
1. Design a progressive return-to-play protocol with sequential phases (e.g., 3 to 4 phases).
2. Avoid exercises stressing other actively injured muscle groups while rehabilitating the current injury.
3. For each phase, specify the phaseNumber, name of the phase, duration in days, and a list of specific recovery exercises.
4. You must output ONLY a valid JSON object matching the schema below. No explanations, no conversation, and no markdown wrapper (except the JSON format itself).

Expected JSON schema:
{
  "phases": [
    {
      "phaseNumber": 1,
      "name": "Initial Rest and Range of Motion",
      "durationDays": 7,
      "exercises": [
        "Ankle alphabet drawing in air (3 sets of 2 repetitions)",
        "Seated calf stretch with towel (hold 30s, 3 reps)"
      ]
    }
  ]
}`;

  const userPrompt = `Generate the phased recovery protocol for this injury:
${JSON.stringify(injuryLog, null, 2)}

Athlete context:
${JSON.stringify(context, null, 2)}`;

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    system: systemPrompt,
    messages: [
      { role: 'user', content: userPrompt }
    ],
    temperature: 0.2
  });

  const contentText = response.content[0].text;
  return parseCleanJson(contentText);
}

module.exports = {
  generateChallenge,
  generateRecoveryProtocol
};
