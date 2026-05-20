import React from "react";
import { useInterviewContext } from "@/context/interview.context";
import { InterviewApi } from "@/services/interview.service";

const useInterview = () => {
  const { loading, setLoading, report, setReport, reports, setReports } =
    useInterviewContext();

  const generateReport = async (payload) => {
    setLoading(true);
    try {
      const formData = new FormData();
      for (const [key, value] of Object.entries(payload)) {
        formData.append(key, value);
      }
      const response = await InterviewApi.generateReport(formData);
      setReport(response?.report);
      return response;
    } catch (error) {
      console.error("generateReport::error:", error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  const getReportById = async (payload) => {
    setLoading(true);
    try {
      const response = await InterviewApi.getReportById(payload);
      setReport(response?.report);
      return response;
    } catch (error) {
      console.error("getReportById::error:", error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  const getReports = async () => {
    setLoading(true);
    try {
      const response = await InterviewApi.getAllReports();
      setReports(response?.reports);
      return response;
    } catch (error) {
      console.error("getReports::error:", error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  const getResumePdf = async (payload) => {
    setLoading(true);
    try {
      const response = await InterviewApi.getResumePdf(payload);
      const url = window.URL.createObjectURL(
        new Blob([response], { type: "application/pdf" })
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `resume_${interviewReportId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("getResumePdf::error:", error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    report,
    reports,
    generateReport,
    getReportById,
    getReports,
    getResumePdf,
  }
};

export default useInterview;