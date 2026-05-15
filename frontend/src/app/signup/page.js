"use client";

import SignUpPage from "@/components/auth/signup/page";
import AuthRedirect from "@/components/AuthRedirect";

export default function SignUp() {
  return (
    <AuthRedirect>
      <SignUpPage />
    </AuthRedirect>
  );
}
