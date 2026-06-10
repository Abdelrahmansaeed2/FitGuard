const User = require('../models/User');

exports.getProfile = async (req, res, next) => {
  try {
    const user = req.user;
    res.status(200).json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        sport: user.sport,
        age: user.age,
        weight: user.weight,
        height: user.height,
        createdAt: user.createdAt
      },
      message: 'Athlete profile retrieved successfully'
    });
  } catch (err) {
    next(err);
  }
};

exports.updateProfile = async (req, res, next) => {
  try {
    const user = req.user;
    const { name, sport, age, weight, height } = req.body;

    if (name !== undefined) user.name = name;
    if (sport !== undefined) user.sport = sport;
    if (age !== undefined) user.age = age;
    if (weight !== undefined) user.weight = weight;
    if (height !== undefined) user.height = height;

    await user.save();

    res.status(200).json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        sport: user.sport,
        age: user.age,
        weight: user.weight,
        height: user.height,
        createdAt: user.createdAt
      },
      message: 'Athlete profile updated successfully'
    });
  } catch (err) {
    next(err);
  }
};
