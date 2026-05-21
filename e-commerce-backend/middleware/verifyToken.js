const jwt = require("jsonwebtoken");
const { JsonWebTokenError, TokenExpiredError, NotBeforeError } = jwt;

const verifyToken =async (req, res, next) => {
    try {
        const authorization = req.headers["authorization"];
        if (!authorization) {
             return res.status(401).json({ message: "Unauthorized: No token provided" });
        }
        const token = authorization.split(" ")[1];
        const verifiedToken = await jwt.verify(token, process.env.SECRETE_KEY);

      req.user = verifiedToken; // Attach to req.user instead of req.body

        next();
    } catch (error) {
        if (error instanceof TokenExpiredError) {
            return res.status(401).json({ message: "Token expired" });
        } else if (error instanceof NotBeforeError) {
             return res.status(401).json({ message: "Token not active yet" });
        } else if (error instanceof JsonWebTokenError) {
             return res.status(401).json({ message: "Invalid token" });
        }
         return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = verifyToken;