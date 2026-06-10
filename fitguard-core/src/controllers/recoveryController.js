const RecoveryProtocol = require('../models/RecoveryProtocol');
const InjuryLog = require('../models/InjuryLog');
const Notification = require('../models/Notification');
const aiService = require('../services/aiService');
const { getInjuryAIContext } = require('../utils/injuryPatterns');

exports.generateProtocol = async (req, res, next) => {
  try {
    const { injuryLogId } = req.body;
    const user = req.user;

    const injuryLog = await InjuryLog.findOne({ _id: injuryLogId, userId: user._id });
    if (!injuryLog) {
      return res.status(404).json({
        success: false,
        data: null,
        message: 'Injury log not found'
      });
    }

    if (injuryLog.recoveryStatus === 'recovered') {
      return res.status(400).json({
        success: false,
        data: null,
        message: 'Cannot generate a recovery protocol for an already recovered injury'
      });
    }

    const injuryLogs = await InjuryLog.find({ userId: user._id });
    const aiContext = getInjuryAIContext(user, 'intermediate', injuryLogs);

    const aiResult = await aiService.generateRecoveryProtocol(injuryLog, aiContext);

    if (!aiResult || !Array.isArray(aiResult.phases)) {
      return res.status(502).json({
        success: false,
        data: null,
        message: 'Invalid protocol format returned by the AI service.'
      });
    }

    await RecoveryProtocol.updateMany(
      { userId: user._id, injuryLogId, status: 'active' },
      { $set: { status: 'completed' } }
    );

    const phases = aiResult.phases.map(p => ({
      phaseNumber: p.phaseNumber,
      name: p.name,
      durationDays: p.durationDays,
      exercises: p.exercises || [],
      completed: false
    }));

    const protocol = new RecoveryProtocol({
      userId: user._id,
      injuryLogId,
      phases,
      currentPhase: 1,
      startDate: new Date(),
      status: 'active'
    });

    await protocol.save();

    const notification = new Notification({
      userId: user._id,
      type: 'recovery_reminder',
      message: `Recovery protocol generated for your ${injuryLog.muscleGroup} ${injuryLog.injuryType}. Let's start Phase 1: ${phases[0].name}.`
    });
    await notification.save();

    res.status(201).json({
      success: true,
      data: protocol,
      message: 'Recovery protocol generated successfully'
    });
  } catch (err) {
    next(err);
  }
};

exports.getProtocols = async (req, res, next) => {
  try {
    const protocols = await RecoveryProtocol.find({ userId: req.user._id })
      .populate('injuryLogId')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: protocols,
      message: 'Recovery protocols retrieved successfully'
    });
  } catch (err) {
    next(err);
  }
};

exports.getActiveProtocols = async (req, res, next) => {
  try {
    const protocols = await RecoveryProtocol.find({ userId: req.user._id, status: 'active' })
      .populate('injuryLogId');

    res.status(200).json({
      success: true,
      data: protocols,
      message: 'Active recovery protocols retrieved successfully'
    });
  } catch (err) {
    next(err);
  }
};

exports.completePhase = async (req, res, next) => {
  try {
    const { id, phaseNumber } = req.params;
    const phaseVal = parseInt(phaseNumber, 10);

    const protocol = await RecoveryProtocol.findOne({ _id: id, userId: req.user._id });
    if (!protocol) {
      return res.status(404).json({
        success: false,
        data: null,
        message: 'Recovery protocol not found'
      });
    }

    if (protocol.status !== 'active') {
      return res.status(400).json({
        success: false,
        data: null,
        message: `Recovery protocol is already marked as ${protocol.status}`
      });
    }

    const phase = protocol.phases.find(p => p.phaseNumber === phaseVal);
    if (!phase) {
      return res.status(400).json({
        success: false,
        data: null,
        message: `Phase ${phaseNumber} does not exist in this protocol`
      });
    }

    if (phase.completed) {
      return res.status(400).json({
        success: false,
        data: null,
        message: `Phase ${phaseNumber} is already completed`
      });
    }

    phase.completed = true;

    const allCompleted = protocol.phases.every(p => p.completed);

    if (allCompleted) {
      protocol.status = 'completed';
      await InjuryLog.updateOne(
        { _id: protocol.injuryLogId },
        { $set: { recoveryStatus: 'recovered' } }
      );
    } else {
      const nextPhase = protocol.phases.find(p => !p.completed);
      if (nextPhase) {
        protocol.currentPhase = nextPhase.phaseNumber;
      }
    }

    await protocol.save();

    let msg = `Phase ${phaseVal} of your recovery protocol completed.`;
    if (protocol.status === 'completed') {
      const injuryLogObj = await InjuryLog.findById(protocol.injuryLogId);
      const muscle = injuryLogObj ? injuryLogObj.muscleGroup : 'injured area';
      msg = `Excellent work! You completed all recovery phases for your ${muscle}. Injury marked as recovered.`;
    }

    const notification = new Notification({
      userId: req.user._id,
      type: 'recovery_reminder',
      message: msg
    });
    await notification.save();

    res.status(200).json({
      success: true,
      data: protocol,
      message: protocol.status === 'completed'
        ? 'All phases completed! Injury recovered!'
        : `Phase ${phaseVal} marked as complete`
    });
  } catch (err) {
    next(err);
  }
};
