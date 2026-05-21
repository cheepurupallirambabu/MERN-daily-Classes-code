const express = require("express");
const {
  register,
  login,
  getUserBasedOnID,
  getAllUsers,
  updateProfile,
  forgetPassword,
} = require("../controller/userController");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

router.post("/register", register);  //http://localhost:5000/user/register
router.post("/login", login);
router.get("/get-users",getAllUsers);
router.get("/get-user/:id",getUserBasedOnID);
// This route is now secured and only allows users to update their own profile.
router.patch("/update-profile", verifyToken, updateProfile);
// This route is insecure. It allows changing a password for any user by their ID without authentication.
router.patch("/forget-password",forgetPassword);
module.exports = router;
