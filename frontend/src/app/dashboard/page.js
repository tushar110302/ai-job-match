"use client";

import DashboardPage from "@/components/auth/dashboard/page";
import ProtectedRoute from "@/components/ProtectedRoute";
import React from "react";

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  );
};

export default Dashboard;
