import jwt from "jsonwebtoken";
import {Blacklist} from "../models/blacklist.model.js";

const verifyJWT = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token ||
      req.body?.token ||
      req.header("Authorization")?.replace("Bearer ", "") ||
      "";

    if (!token) {
      return res.status(401).json({
        success: false,
        error: "Token not found in request.",
      });
    }

    const isBlacklisted = await Blacklist.findOne({ token });
    if (isBlacklisted) {
      return res.status(401).json({
        success: false,
        error: "Token is expired. Please Login again.",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      error,
    });
  }
};

export { verifyJWT };
