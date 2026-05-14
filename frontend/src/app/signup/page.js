// app/signup/page.js

"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, User, Loader2 } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
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
  const [loading, setLoading] = useState(false);

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

    try {
      setLoading(true);

      // API CALL HERE
      // Example:
      /*
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }
      */

      console.log("SIGNUP DATA:", formData);

      // temporary success simulation
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      console.log("_handleSumbit::error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020b22] px-6 py-12">
      {/* Background Glow */}
      <div className="absolute left-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-blue-700/20 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-violet-700/20 blur-3xl" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_0_60px_rgba(59,130,246,0.12)] backdrop-blur-2xl transition-all duration-500 hover:translate-y-[-2px] hover:shadow-[0_0_80px_rgba(139,92,246,0.18)]">
        {/* Top Glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-semibold leading-[1] tracking-[-0.04em] text-white">
            Join the community
          </h1>

          <p className="mt-4 text-sm text-gray-400">
            Step into the future of digital excellence.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={_handleSubmit} className="space-y-7">
          {/* Username */}
          <div>
            <label className="mb-3 block text-sm font-medium tracking-wide text-gray-200">
              Username
            </label>

            <div
              className={`group flex items-center gap-3 border-b pb-3 transition ${
                errors?.username
                  ? "border-red-500"
                  : "border-white/10 focus-within:border-violet-400"
              }`}
            >
              <User
                size={18}
                className="text-gray-400 transition group-focus-within:text-violet-300"
              />

              <input
                type="text"
                name="username"
                value={formData?.username}
                onChange={_handleChange}
                placeholder="curator_aura"
                className="w-full bg-transparent text-[15px] font-medium tracking-[-0.01em] text-white placeholder:text-gray-500 focus:outline-none"
              />
            </div>

            {errors?.username && (
              <p className="mt-2 text-sm text-red-400">{errors?.username}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-3 block text-sm font-medium tracking-wide text-gray-200">
              Email Address
            </label>

            <div
              className={`group flex items-center gap-3 border-b pb-3 transition ${
                errors?.email
                  ? "border-red-500"
                  : "border-white/10 focus-within:border-violet-400"
              }`}
            >
              <Mail
                size={18}
                className="text-gray-400 transition group-focus-within:text-violet-300"
              />

              <input
                type="email"
                name="email"
                value={formData?.email}
                onChange={_handleChange}
                placeholder="name@aura.io"
                className="w-full bg-transparent text-[15px] font-medium tracking-[-0.01em] text-white placeholder:text-gray-500 focus:outline-none"
              />
            </div>

            {errors?.email && (
              <p className="mt-2 text-sm text-red-400">{errors?.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-3 block text-sm font-medium tracking-wide text-gray-200">
              Password
            </label>

            <div
              className={`group flex items-center gap-3 border-b pb-3 transition ${
                errors?.password
                  ? "border-red-500"
                  : "border-white/10 focus-within:border-violet-400"
              }`}
            >
              <Lock
                size={18}
                className="text-gray-400 transition group-focus-within:text-violet-300"
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData?.password}
                onChange={_handleChange}
                placeholder="••••••••"
                className="w-full bg-transparent text-[15px] font-medium tracking-[-0.01em] text-white placeholder:text-gray-500 focus:outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="text-gray-400 transition hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {errors?.password && (
              <p className="mt-2 text-sm text-red-400">{errors?.password}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="group relative mt-2 flex h-14 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#6d5dfc] to-[#b05cff] text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(139,92,246,0.45)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />

            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              "Create Account"
            )}
          </button>

          {/* Footer */}
          <p className="pt-4 text-center text-sm text-gray-400">
            Already a member?{" "}
            <Link
              href={"/login"}
              className="cursor-pointer font-semibold text-white transition hover:text-violet-300"
            >
              Log in
            </Link>
          </p>
        </form>

        {/* Bottom Decorative Wave */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full overflow-hidden opacity-20">
          <svg
            viewBox="0 0 1440 320"
            className="absolute bottom-0 w-full"
            fill="none"
          >
            <path
              d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,154.7C672,171,768,213,864,218.7C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}
