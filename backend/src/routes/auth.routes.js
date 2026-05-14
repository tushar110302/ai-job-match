import { Router } from "express";
import {
  getUser,
  loginController,
  logoutController,
  signUpController,
} from "../controllers/auth.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/signup", signUpController);

router.post("/login", loginController);

router.post("/logout", logoutController);

router.post("/getUser", verifyJWT, getUser);

export default router;
