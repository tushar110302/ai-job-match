import { Router } from "express";
import { upload } from "../middlewares/file.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { generateReportController, getAllReportsController, getReportById } from "../controllers/interview.controller.js";

const interviewRouter = Router();

interviewRouter.post(
  "/generateReport",
  verifyJWT,
  upload.single("resume"),
  generateReportController,
);

interviewRouter.post("/getAllReports", verifyJWT, getAllReportsController);
interviewRouter.post("/getReportById", verifyJWT, getReportById);

export default interviewRouter;
