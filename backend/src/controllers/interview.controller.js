import { PDFParse } from "pdf-parse";
import { InterviewReport } from "../models/interviewReport.model.js";
import { generateInterviewReport } from "../services/ai.service.js";

const generateReportController = async (req, res) => {
  const { selfDescription, jobDescription } = req.body;
  let resumeContent = "";
  if (req.file) {
    resumeContent = await new PDFParse(
      Uint8Array.from(req.file?.buffer),
    ).getText();
  }

  if (!selfDescription || !jobDescription) {
    return res.status(400).json({
      success: false,
      error: "All fields are required",
    });
  }

  try {
    const reportByAi = await generateInterviewReport({
      resume: resumeContent?.text,
      selfDescription,
      jobDescription,
    });
    if (!reportByAi) {
      return res.status(404).json({
        success: false,
        error: "Report could not be generated",
      });
    }
    // console.log("AI REPORT\n", reportByAi);

    // return res.status(200).json({
    //   success: true,
    //   ...reportByAi,
    //   resume: resumeContent.text,
    //   selfDescription,
    //   jobDescription,
    //   message: "Interview report generated successfully.",
    // });

    const report = await InterviewReport.create({
      resume: resumeContent.text,
      selfDescription,
      jobDescription,
      user: req.user?.id,
      // title: req.body.title,
      ...reportByAi,
    });

    return res.status(200).json({
      success: true,
      report,
      message: "Interview report generated successfully.",
    });
  } catch (error) {
    console.log("generateReportController::error: ", error);
    return res.status(500).json({
      success: false,
      error,
      message: "Failed to generate interview report.",
    });
  }
};

const getAllReportsController = async (req, res) => {
  const userId = req.user?.id;

  try {
    const reports = await InterviewReport.find({ user: userId })
      .sort({
        createdAt: -1,
      })
      .select("title matchScore createdAt");
      
    if (!reports) {
      return res.status(404).json({
        success: false,
        message: "Interview report not found.",
      });
    }
    return res.status(200).json({
      success: true,
      reports,
      message: "Interview reports fetched successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
      message: "Failed to fetch interview reports.",
    });
  }
};

const getReportById = async (req, res) => {
  const { interview_id } = req.body;
  const userId = req.user?.id;

  try {
    const report = await InterviewReport.findOne({
      _id: interview_id,
      user: userId,
    }).select("-user -__v");

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Interview report not found.",
      });
    }

    return res.status(200).json({
      success: true,
      report,
      message: "Interview report fetched successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
      message: "Failed to fetch interview report.",
    });
  }
};

export { generateReportController, getAllReportsController, getReportById };
