"use client";

import React, { useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import { redirect, useRouter } from "next/navigation";

// Subtle full-page loader — doesn't feel like an error, feels like the app is thinking
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-full border-2 border-white/10" />
        <div className="absolute inset-0 rounded-full border-2 border-t-white animate-spin" />
      </div>
      <p className="text-white/30 text-sm tracking-widest uppercase">Loading</p>
    </div>
  </div>
);

const ProtectedRoute = ({ children }) => {
  const { user, authLoading } = useAuth();

  // Wait for the session check to complete before making any redirect decision
  // if (authLoading) {
  //   return <PageLoader />;
  // }

  // if (!user) {
  //   redirect("/login");
  // }

  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [authLoading, user]);

  // Show loader while session check is in flight OR while push is pending
  if (authLoading || !user) {
    return <PageLoader />;
  }

  return children;
};

export default ProtectedRoute;
