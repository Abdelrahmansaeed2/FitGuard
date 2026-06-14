const InjuryLog = require('../models/InjuryLog');
const Challenge = require('../models/Challenge');
const Notification = require('../models/Notification');
const RecoveryProtocol = require('../models/RecoveryProtocol');

exports.getStats = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const [
      totalInjuries,
      injuries,
      activeChallenges,
      unreadNotifications,
      activeProtocols
    ] = await Promise.all([
      InjuryLog.countDocuments({ userId }),
      InjuryLog.find({ userId }),
      Challenge.countDocuments({ userId, status: 'active' }),
      Notification.countDocuments({ userId, read: false }),
      RecoveryProtocol.countDocuments({ userId, status: 'active' })
    ]);

    // Severity Breakdown
    const severityBreakdown = {
      mild: 0,
      moderate: 0,
      severe: 0
    };

    // Muscle Group Breakdown
    const muscleGroups = {};

    injuries.forEach(injury => {
      if (severityBreakdown[injury.severity] !== undefined) {
        severityBreakdown[injury.severity]++;
      }
      
      const muscle = injury.muscleGroup.toLowerCase();
      muscleGroups[muscle] = (muscleGroups[muscle] || 0) + 1;
    });

    const topMuscleGroups = Object.entries(muscleGroups)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 3);

    const biometricsHistory = [
      { day: 'Mon', hrv: 62, sleep: 7.5, score: 65 },
      { day: 'Tue', hrv: 65, sleep: 8.0, score: 70 },
      { day: 'Wed', hrv: 60, sleep: 6.8, score: 62 },
      { day: 'Thu', hrv: 68, sleep: 8.2, score: 75 },
      { day: 'Fri', hrv: 70, sleep: 7.9, score: 78 },
      { day: 'Sat', hrv: 75, sleep: 8.5, score: 85 },
      { day: 'Sun', hrv: 72, sleep: 8.1, score: 80 }
    ];

    res.status(200).json({
      success: true,
      data: {
        totalInjuries,
        severityBreakdown,
        topMuscleGroups,
        activeChallenges,
        unreadNotifications,
        activeProtocols,
        biometricsHistory
      },
      message: 'Dashboard statistics retrieved successfully'
    });
  } catch (err) {
    next(err);
  }
};
