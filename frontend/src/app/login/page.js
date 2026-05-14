// app/login/page.js

"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, Loader2 } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    api: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
      api: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors((prev) => ({
      ...prev,
      ...newErrors,
    }));

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      // API CALL HERE
      // Example:
      /*
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }
      */

      console.log("LOGIN DATA:", formData);

      // temporary delay simulation
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        api: error.message || "Something went wrong",
      }));
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
            Welcome back
          </h1>

          <p className="mt-4 text-sm text-gray-400">
            Access your premium digital workspace.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-7">
          {/* Email */}
          <div>
            <label className="mb-3 block text-sm font-medium tracking-wide text-gray-200">
              Email Address
            </label>

            <div
              className={`group flex items-center gap-3 border-b pb-3 transition ${
                errors.email
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
                value={formData.email}
                onChange={handleChange}
                placeholder="name@aura.io"
                className="w-full bg-transparent text-[15px] font-medium tracking-[-0.01em] text-white placeholder:text-gray-500 focus:outline-none"
              />
            </div>

            {errors.email && (
              <p className="mt-2 text-sm text-red-400">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <label className="text-sm font-medium tracking-wide text-gray-200">
                Password
              </label>

              <button
                type="button"
                className="text-xs text-violet-300 transition hover:text-violet-200"
              >
                Forgot Password?
              </button>
            </div>

            <div
              className={`group flex items-center gap-3 border-b pb-3 transition ${
                errors.password
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
                value={formData.password}
                onChange={handleChange}
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

            {errors.password && (
              <p className="mt-2 text-sm text-red-400">{errors.password}</p>
            )}
          </div>

          {/* API Error */}
          {errors.api && (
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {errors.api}
            </div>
          )}

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
              "Log In"
            )}
          </button>

          {/* Footer */}
          <p className="pt-2 text-center text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <Link
              href={"/signup"}
              className="cursor-pointer font-semibold text-white transition hover:text-violet-300"
            >
              Sign up
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
