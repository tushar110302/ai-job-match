"use client";

import React, { useState } from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

import DashboardCard from "./DashboardCard";
import DashboardHeader from "./DashboardHeader";

const DashboardPage = () => {
  const { user, actionLoading, handleLogout } = useAuth();
  const [reportLoading, setReportLoading] = useState(false);
  const router = useRouter();

  const _logout = async () => {
    await handleLogout();
    router.push("/login");
  };

  const _onGenerateReport = async () => {
    setReportLoading(true);
    // TODO: wire to your report generation API
    await new Promise((r) => setTimeout(r, 2000));
    setReportLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#030b2b] text-white flex flex-col overflow-hidden relative">
      {/* background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] bg-purple-700/20 blur-[100px] md:blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] bg-blue-700/20 blur-[100px] md:blur-[120px] rounded-full" />
      </div>

      <DashboardHeader
        loading={actionLoading}
        onLogout={_logout}
      />

      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 py-6 sm:py-10">
        {/* center glow */}
        <div className="absolute w-[300px] sm:w-[450px] md:w-[550px] h-[300px] sm:h-[450px] md:h-[550px] bg-blue-600/10 blur-[100px] md:blur-[120px] rounded-full" />

        <DashboardCard
          user={user}
          reportLoading={reportLoading}
          onGenerateReport={_onGenerateReport}
        />
      </main>
    </div>
  );
};

export default DashboardPage;