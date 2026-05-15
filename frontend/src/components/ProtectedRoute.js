"use client";

import React, { useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import { redirect, useRouter } from "next/navigation";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      // router.push("/login");
      redirect("/login");
    }
  }, [user, loading, router]);

  if (loading)
    return <h1 className="text-4xl text-center font-extrabold">Loading...</h1>;

  if (!user) {
    // return null;
    redirect("/login");
  }

  return children;
};

export default ProtectedRoute;
