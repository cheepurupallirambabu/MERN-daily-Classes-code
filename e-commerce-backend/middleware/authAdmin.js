const isAdmin = (req, res, next) => {
  try {
    // Assuming verifyToken attaches user info to req.user
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const isUser = (req, res, next) => {
  try {
    // Assuming verifyToken attaches user info to req.user
    if (req.user.role !== "user") {
      return res.status(403).json({ message: "Access denied. User only." });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { isAdmin, isUser };