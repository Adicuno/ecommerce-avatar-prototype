const express = require("express");
const {
  getUsers,
  getUserProfile,
  updateProfile,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").get(getUsers); // GET /api/users

router
  .route("/:id")
  .get(getUserProfile) // GET /api/users/:id
  .put(updateProfile); // PUT /api/users/:id (Update Profile)

module.exports = router;
