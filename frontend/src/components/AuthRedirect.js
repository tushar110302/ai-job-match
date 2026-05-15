"use client";

import React, { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";

import useAuth from "@/hooks/useAuth";

const AuthRedirect = ({ children }) => {
  const router = useRouter();

  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      // router.push("/dashboard");
      redirect("/dashboard");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <h1 className="text-4xl text-center font-extrabold">
        Loading...
      </h1>
    );
  }

  if (user) {
    redirect("/dashboard");
  }

  return children;
};

export default AuthRedirect;