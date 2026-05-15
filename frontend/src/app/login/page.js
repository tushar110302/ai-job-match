"use client";

import LoginPage from "@/components/auth/login/page";
import AuthRedirect from "@/components/AuthRedirect";

export default function Login() {
  return (
    <AuthRedirect>
      <LoginPage />
    </AuthRedirect>
  );
}
