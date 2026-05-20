const Users = require("../model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//add user
const register = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      password,
      address,
      city,
      userType,
      state,
      zipCode,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name: name,
      email: email,
      phone: phone,
      password: hashedPassword,
      address: address,
      city: city,
      userType: userType,
      state: state,
      zipCode: zipCode,
    };
    await Users.create(newUser);
    res.status(200).json({ message: "Register Successfully" });
  } catch (error) {
    res.status(500).json({ message: "failed to register", err: error });
  }
};

//login handler
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const foundUser = await Users.findOne({ email: username });
    if (!foundUser) {
      return res.status(404).json({ message: "username not found" });
    }

    //generate JWT new token
    const token = jwt.sign(
      { role: foundUser.userType, email: username, id: foundUser._id },
      process.env.SECRETE_KEY,
      { notBefore: "10s", expiresIn: "20M" },
    );

    // console.log("generated Token:", token);
    const isPasswordMatch = await bcrypt.compare(password, foundUser.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "invalid password" });
    }
    res.status(202).json({ message: "login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", err: error });
  }
};
// getUser
const getUserBasedOnID = async (req, res) => {
  try {
    const foundUser = await Users.findById(req.params.id);
    res.status(200).json({ foundUser });
  } catch (error) {
    res.status(500).json({ message: "failed to get user" });
  }
};
// update profile
const updateProfile = async (req, res) => {
  try {
    const updatedProfile = await Users.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.status(200).json({ message: "updated successfully", updatedProfile });
  } catch (error) {
    res.status(500).json({ message: "failed to update profile", err: error });
  }
};

// get Users
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();
    res.status(200).json({ allUsers });
  } catch (error) {
    res.status(500).json({ message: "failed to get users", err: error });
  }
};

//forget password
const forgetPassword = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  try {
    // Add await here
    const updatedUser = await Users.findByIdAndUpdate(
      req.params.id,
      { password: hashedPassword },
      { new: true },
    );
    res.status(200).json({ message: "password updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "failed to update password", err: error });
  }
};

module.exports = {
  register,
  login,
  getUserBasedOnID,
  getAllUsers,
  updateProfile,
  forgetPassword,
};
