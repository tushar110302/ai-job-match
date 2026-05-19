import ProtectedRoute from "@/components/ProtectedRoute";
import ReportView from "@/components/report/ReportView";
import React from "react";

const ReportPage = () => {
  return (
    <ProtectedRoute>
      <ReportView />
    </ProtectedRoute>
  )
}

export default ReportPage;