import { Router } from "express";
import {
  getUser,
  loginController,
  logoutController,
  signUpController,
} from "../controllers/auth.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.post("/signup", signUpController);

authRouter.post("/login", loginController);

authRouter.post("/logout", logoutController);

authRouter.post("/getUser", verifyJWT, getUser);

export default authRouter;
