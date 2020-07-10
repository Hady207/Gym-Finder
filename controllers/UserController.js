const User = require('../models/Users');

exports.GetAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: 'user' });
    res.status(200).json({
      status: 'success',
      size: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
