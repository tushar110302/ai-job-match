"use client";

import React, { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

import DashboardCard from "./DashboardCard";
import DashboardHeader from "./DashboardHeader";
import useInterview from "@/hooks/useInterview";

const jd = `We are looking for a Full Stack Developer to join our engineering team and help build modern, scalable web applications.

Responsibilities:
- Develop responsive frontend applications using React.js and Next.js
- Build backend APIs using Node.js and Express.js
- Design and manage MongoDB databases
- Implement authentication, authorization, and secure API practices
- Optimize applications for performance and scalability
- Collaborate with designers and product managers to deliver high-quality features
- Debug and resolve production issues efficiently
- Write clean, maintainable, and reusable code

Requirements:
- Strong proficiency in JavaScript and TypeScript
- Experience with React.js, Next.js, Node.js, and Express.js
- Good understanding of REST APIs and database design
- Experience with Tailwind CSS or modern CSS frameworks
- Familiarity with Git and version control workflows
- Understanding of authentication systems such as JWT and OAuth
- Strong communication and problem-solving skills

Preferred Qualifications:
- Experience deploying applications to Vercel, AWS, or Docker environments
- Familiarity with real-time technologies such as WebSockets or SSE
- Knowledge of testing frameworks and CI/CD pipelines
- Interest in AI-powered products and modern SaaS development`;

const sd = `Full Stack Developer with strong experience in building scalable web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. Skilled in creating responsive user interfaces, REST APIs, authentication systems, and real-time features. Passionate about performance optimization, clean architecture, and modern UI/UX design.

Experienced in working with Tailwind CSS, TypeScript, JWT authentication, and cloud deployment workflows. Comfortable collaborating in agile teams, debugging production issues, and shipping user-focused products quickly.

Strong problem-solving abilities with a focus on writing maintainable, efficient, and reusable code. Interested in AI-powered applications, developer tools, and scalable SaaS platforms.`;

const DashboardPage = () => {
  const router = useRouter();
  const { user, actionLoading, handleLogout } = useAuth();
  const { reports, getReports } = useInterview();

  const _logout = async () => {
    await handleLogout();
    router.push("/login");
  };

  // const _onGenerateReport = async () => {
  //   // setReportLoading(true);
  //   const response = await generateReport({
  //     resume: "",
  //     jobDescription: jd,
  //     selfDescription: sd,
  //   });
  //   console.log(response);
  //   if (response?.success) {
  //     router.push(`/interview-report/${report?._id}`);
  //   }
  //   // setReportLoading(false);
  // };

  const _getUserReports = async () => {
    const response = await getReports();
    // console.log(response);
  };

  useEffect(() => {
    _getUserReports();
  }, []);

  return (
    <div className="min-h-screen bg-[#030b2b] text-white flex flex-col overflow-hidden relative">
      {/* background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-62.5 sm:w-87.5 md:w-100 h-62.5 sm:h-87.5 md:h-100 bg-purple-700/20 blur-[100px] md:blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-62.5 sm:w-87.5 md:w-100 h-62.5 sm:h-87.5 md:h-100 bg-blue-700/20 blur-[100px] md:blur-[120px] rounded-full" />
      </div>

      <DashboardHeader loading={actionLoading} onLogout={_logout} />

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 ">
        {/* center glow */}
        <div className="absolute w-75 sm:w-112.5 md:w-137.5 h-75 sm:h-112.5 md:h-137.5 bg-blue-600/10 blur-[100px] md:blur-[120px] rounded-full" />

        <DashboardCard user={user} />
        {reports.length > 0 && (
          <button className="text-2xl bg-amber-800 px-2 py-3 mt-5">
            {" "}
            Your Reports: {reports.length}
          </button>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;
