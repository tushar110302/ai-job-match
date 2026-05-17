"use client";

import Link from "next/link";
import { Lock, Mail, User } from "lucide-react";
import React, { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

import AuthButton from "@/components/auth/AuthButton";
import AuthInput from "@/components/auth/AuthInput";
import AuthLayout from "@/components/auth/AuthLayout";
import PasswordInput from "@/components/auth/PasswordInput";

const SignUpPage = () => {
  const router = useRouter();

  const { user, handleSignup, actionLoading } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  // const [loading, setLoading] = useState(false);

  const _handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const _validateForm = () => {
    const newErrors = {};

    if (!formData?.username?.trim()) {
      newErrors.username = "Username is required";
    } else if (formData?.username?.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!formData?.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData?.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData?.password?.trim()) {
      newErrors.password = "Password is required";
    } else if (formData?.password?.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors((prev) => ({
      ...prev,
      ...newErrors,
    }));

    return Object.keys(newErrors).length === 0;
  };

  const _handleSubmit = async (e) => {
    e.preventDefault();

    if (!_validateForm()) return;

    console.log("SIGNUP DATA:", formData);
    const res = await handleSignup(formData);
    // res?.success && router.push("/dashboard");
    if (res?.success) {
      router.push("/dashboard");
    }
  };

  return (
    <AuthLayout
      title="Join the community"
      subtitle="Step into the future of digital excellence."
    >
      <form onSubmit={_handleSubmit} className="space-y-7">
        <AuthInput
          label="Username"
          icon={User}
          name="username"
          type="text"
          value={formData?.username}
          onChange={_handleChange}
          placeholder="your_name"
          error={errors?.username}
        />
        <AuthInput
          label="Email Address"
          icon={Mail}
          name="email"
          type="email"
          value={formData?.email}
          onChange={_handleChange}
          placeholder="name@aura.io"
          error={errors?.email}
        />

        <PasswordInput
          icon={Lock}
          name="password"
          value={formData?.password}
          onChange={_handleChange}
          placeholder="••••••••"
          error={errors?.password}
        />

        <AuthButton loading={actionLoading} text="Sigun Up" />

        <p className="text-center text-sm text-gray-400">
          Already a member?{" "}
          <Link
            href="/login"
            className="font-semibold text-white transition hover:text-violet-300"
          >
            Log in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default SignUpPage;
