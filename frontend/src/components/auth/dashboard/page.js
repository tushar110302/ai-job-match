"use client";

import React, { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

import DashboardCard from "./DashboardCard";
import DashboardHeader from "./DashboardHeader";
import useInterview from "@/hooks/useInterview";
import ReportsList from "@/components/report/ReportList";

const DashboardPage = () => {
  const router = useRouter();
  const { user, actionLoading, handleLogout } = useAuth();
  const { reports, getReports } = useInterview();

  const _logout = async () => {
    await handleLogout();
    router.push("/login");
  };

  const _getUserReports = async () => {
    const response = await getReports();
    // console.log(response);
  };

  useEffect(() => {
    _getUserReports();
  }, []);

  return (
    <div className="min-h-screen bg-[#030b2b] text-white flex flex-col overflow-hidden relative">
      {/* background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700/20 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <DashboardHeader loading={actionLoading} onLogout={_logout} />

      <main className="relative z-10 flex-1 flex flex-col md:flex-row items-start lg:items-center justify-center gap-8 px-6 py-10 max-w-5xl mx-auto w-full">
        <div className="w-full md:w-[420px] shrink-0">
          <DashboardCard user={user} />
        </div>

        <div className="w-full md:flex-1">
          <ReportsList reports={reports} />
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
