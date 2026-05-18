import { apiClient } from "./api";

export class InterviewApi {
    static generateReport = async (payload) => await apiClient("interview/generateReport", "POST", payload, {}, 60000);
    static getAllReports = async () => await apiClient("interview/getAllReports", "POST");
    static getReportById = async (payload) => await apiClient("interview/getReportById", "POST", payload);
    static getResumePdf = async (payload) => await apiClient("interview/getResumePdf", "POST", payload, {}, 60000);
}