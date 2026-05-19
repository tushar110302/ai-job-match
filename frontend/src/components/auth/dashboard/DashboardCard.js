"use client";

import React from "react";

import Avatar3D from "./Avatar3D";
import GenerateButton from "./GenerateButton";
// import Badge from "./Badge";

const DashboardCard = ({ user }) => {
  return (
    <div
      className="
        relative
        w-full max-w-[95%] sm:max-w-sm md:max-w-md
        rounded-3xl sm:rounded-[28px]
        border border-white/10
        bg-[#0d153d]/90
        backdrop-blur-xl
        shadow-[0_0_60px_rgba(0,0,0,0.55)]
        px-5 sm:px-7 md:px-8
        py-7 sm:py-9 md:py-10
        flex flex-col items-center
      "
    >
      <Avatar3D />

      {/* user info */}
      <div className="mt-5 sm:mt-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#d7daf6] tracking-tight">
          {user?.username}
        </h2>

        <p className="mt-2 text-sm sm:text-base text-white/60 break-all">
          {user?.email}
        </p>
      </div>

      <GenerateButton />

      {/* badges */}
      {/* <div className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
        <Badge>Premium Member</Badge>

        <Badge>Verified</Badge>
      </div> */}
    </div>
  );
};

export default DashboardCard;
