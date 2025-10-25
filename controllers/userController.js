const User = require("../models/User");

// @desc    Get all users (for debugging/admin)
// @route   GET /api/users
const getUsers = (req, res) => {
  try {
    const users = User.findAll();
    res.status(200).json({ success: true, count: users.length, data: users });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Get single user profile
// @route   GET /api/users/:id
const getUserProfile = (req, res) => {
  try {
    const user = User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Update user body profile (height, weight, bodyType)
// @route   PUT /api/users/:id
const updateProfile = (req, res) => {
  try {
    const { height, weight, bodyType } = req.body;

    // Simple input validation
    if (!height && !weight && !bodyType) {
      return res
        .status(400)
        .json({
          success: false,
          error: "Please provide height, weight, or bodyType to update.",
        });
    }

    const updatedUser = User.updateProfile(req.params.id, req.body);

    if (!updatedUser) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

module.exports = {
  getUsers,
  getUserProfile,
  updateProfile,
};
