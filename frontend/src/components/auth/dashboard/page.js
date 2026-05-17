"use client";

import React, { useState } from "react";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ─── tiny reusable spinner ────────────────────────────────────────────────────
const Spinner = () => (
  <span className="relative inline-flex w-4 h-4">
    <span className="absolute inset-0 rounded-full border-2 border-white/20" />
    <span className="absolute inset-0 rounded-full border-2 border-t-white animate-spin" />
  </span>
);

// ─── avatar initials ──────────────────────────────────────────────────────────
const Avatar = ({ user }) => {
  const initials = [user?.username, user?.email]
    .filter(Boolean)
    .map((s) => s[0].toUpperCase())
    .slice(0, 1)
    .join("");

  return (
    <div className="relative">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold
                   bg-gradient-to-br from-white/15 to-white/5 border border-white/10
                   shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
      >
        {initials || "?"}
      </div>
      {/* online dot */}
      <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0f0f10]" />
    </div>
  );
};

// ─── stat pill ────────────────────────────────────────────────────────────────
const StatPill = ({ label, value }) => (
  <div className="flex flex-col gap-0.5 px-4 py-3 rounded-xl bg-white/4 border border-white/[0.07]">
    <span className="text-[11px] uppercase tracking-widest text-white/30 font-medium">
      {label}
    </span>
    <span className="text-sm text-white/80 font-semibold truncate">
      {value || "—"}
    </span>
  </div>
);

// ─── main dashboard component ─────────────────────────────────────────────────
const DashboardPage = () => {
  const { user, actionLoading, handleLogout } = useAuth();
  const [reportLoading, setReportLoading] = useState(false);
  const router = useRouter();

  const _logout = async () => {
    await handleLogout();
    router.push("/login");
  };

  const _onGenerateReport = async () => {
    setReportLoading(true);
    // TODO: wire to your report generation API
    await new Promise((r) => setTimeout(r, 2000));
    setReportLoading(false);
  };

  return (
    // Full-page background — matches login dark canvas
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      {/* Ambient glow behind card */}
      <div
        className="absolute w-120 h-120 rounded-full opacity-[0.06] blur-[120px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #ffffff 0%, transparent 70%)",
        }}
      />

      <div className="relative w-full max-w-sm flex flex-col gap-3">
        {/* ── header wordmark ── */}
        <p className="text-[11px] tracking-[0.3em] text-white/20 uppercase font-medium text-center mb-1">
          ResumeAI
        </p>

        {/* ── main card ── */}
        <div
          className="rounded-2xl border border-white/8 bg-white/3
                     backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_48px_rgba(0,0,0,0.6)]
                     overflow-hidden"
        >
          {/* top accent line */}
          <div className="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent" />

          <div className="p-6 flex flex-col gap-6">
            {/* ── user identity block ── */}
            <div className="flex items-center gap-4">
              <Avatar user={user} />
              <div className="flex flex-col min-w-0">
                <span className="text-base font-semibold text-white leading-tight truncate">
                  {user?.username || "Anonymous"}
                </span>
                <span className="text-sm text-white/35 truncate mt-0.5">
                  {user?.email || "No email on file"}
                </span>
              </div>
            </div>

            {/* ── divider ── */}
            <div className="h-px bg-white/6" />

            {/* ── stat pills ── */}
            <div className="grid grid-cols-2 gap-2">
              <StatPill label="Username" value={user?.username} />
              <StatPill label="Email" value={user?.email} />
            </div>

            {/* ── generate report CTA ── */}
            <button
              onClick={_onGenerateReport}
              disabled={reportLoading}
              className="
                group relative w-full py-3 rounded-xl font-semibold text-sm
                bg-white text-[#0a0a0a]
                hover:bg-white/90 active:scale-[0.98]
                disabled:opacity-60 disabled:cursor-not-allowed
                transition-all duration-150
                shadow-[0_1px_0_rgba(255,255,255,0.5)_inset,0_4px_16px_rgba(0,0,0,0.4)]
                flex items-center justify-center gap-2
              "
            >
              {reportLoading ? (
                <>
                  <span className="relative inline-flex w-4 h-4">
                    <span className="absolute inset-0 rounded-full border-2 border-black/20" />
                    <span className="absolute inset-0 rounded-full border-2 border-t-black animate-spin" />
                  </span>
                  <span>Generating…</span>
                </>
              ) : (
                <>
                  {/* subtle arrow that nudges on hover */}
                  <span>Generate Report</span>
                  <svg
                    className="w-4 h-4 opacity-50 group-hover:translate-x-0.5 transition-transform duration-150"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>

          {/* bottom accent line */}
          <div className="h-px w-full bg-linear-to-r from-transparent via-white/6 to-transparent" />
        </div>

        {/* ── logout link — subtle, below the card ── */}
        <button
          onClick={_logout}
          disabled={actionLoading}
          className="mx-auto text-[12px] text-white/20 hover:text-white/50
                     tracking-wide transition-colors duration-150 flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {actionLoading ? <Spinner /> : null}
          Sign out
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
