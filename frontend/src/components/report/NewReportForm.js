"use client";

import { useState, useRef, useCallback } from "react";
import {
  Briefcase,
  User,
  CloudUpload,
  CheckCircle2,
  Sparkles,
  Info,
  X,
  FileText,
  Loader2,
} from "lucide-react";
import DashboardHeader from "../auth/dashboard/DashboardHeader";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import useInterview from "@/hooks/useInterview";

// ─── constants ────────────────────────────────────────────────────────────────
const MAX_JD_CHARS = 5000;

// ─── tiny primitives ──────────────────────────────────────────────────────────
const Badge = ({ children, color = "primary" }) => {
  const styles = {
    primary: "bg-[#c0c1ff]/10 border-[#c0c1ff]/20 text-[#c0c1ff]",
    secondary: "bg-[#ffafd3]/10 border-[#ffafd3]/20 text-[#ffafd3]",
  };
  return (
    <span
      className={`px-3 py-1 rounded-full border text-[10px] font-bold tracking-widest uppercase ${styles[color]}`}
    >
      {children}
    </span>
  );
};

const SectionLabel = ({ icon: Icon, label, color = "text-[#ffafd3]" }) => (
  <div className={`flex items-center gap-2 ${color}`}>
    <Icon size={16} strokeWidth={2} />
    <span className="text-[11px] font-bold tracking-[0.2em] uppercase">
      {label}
    </span>
  </div>
);

// ─── main page ────────────────────────────────────────────────────────────────
export default function NewReportForm() {
  const [jobDescription, setJobDescription] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [done, setDone] = useState(false);
  const fileInputRef = useRef(null);

  const router = useRouter();
  const { actionLoading, handleLogout } = useAuth();
  const { generateReport } = useInterview();

  const _logout = async () => {
    await handleLogout();
    router.push("/login");
  };

  const handleFile = useCallback((f) => {
    if (!f) return;
    if (f.size > 3 * 1024 * 1024) return alert("File must be under 3MB");
    if (
      ![
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(f.type)
    )
      return alert("Only PDF or DOCX allowed");
    setFile(f);
  }, []);

  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragging(false);
      handleFile(e.dataTransfer.files[0]);
    },
    [handleFile],
  );

  const handleSubmit = async () => {
    if (!jobDescription.trim()) return;
    setIsLoading(true);
    setDone(false);
    const response = await generateReport({
      resume: "",
      jobDescription: jobDescription.trim(),
      selfDescription: selfDescription.trim(),
    });
    console.log(response);
    if (response?.success) {
      router.push(`/report/${response?.report?._id}`);
    }
    // await new Promise((r) => setTimeout(r, 2200));
    setIsLoading(false);
    setDone(true);
    // setTimeout(() => setDone(false), 3000);
  };

  const jdCount = jobDescription.length;

  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] font-sans overflow-x-hidden">
      {/* ── ambient blobs ── */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-20%] -right-[10%] w-150 h-150 rounded-full bg-[#494bd6]/10 blur-[140px]" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[#ffafd3]/6 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#8083ff]/4 blur-[160px]" />
      </div>

      {/* ── nav ── */}
      <DashboardHeader loading={actionLoading} onLogout={_logout} />

      {/* ── hero ── */}
      <main className="px-4 md:px-8 max-w-6xl mx-auto pb-16">
        <div className="text-center mb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c0c1ff]/20 bg-[#c0c1ff]/5 text-[#c0c1ff] text-xs font-semibold tracking-widest uppercase mb-2">
            <Sparkles size={12} />
            AI-Powered Analysis
          </div>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.1] tracking-tight">
            Create Your Custom{" "}
            <span className="bg-linear-to-r from-[#c0c1ff] via-[#ffafd3] to-[#c0c1ff] bg-clip-text text-transparent bg-[length:200%] animate-gradient">
              Interview Plan
            </span>
          </h1>
          <p className="text-[#908fa0] text-lg max-w-xl mx-auto leading-relaxed">
            Let our AI analyze the job requirements and your unique profile to
            build a winning strategy.
          </p>
        </div>

        {/* ── glass card ── */}
        <div className="rounded-3xl border border-white/10 bg-[#11192b]/85 backdrop-blur-3xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(192,193,255,0.06)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* ── LEFT: job description ── */}
            <section className="p-7 lg:p-9 flex flex-col gap-6 md:border-r border-white/6">
              <div className="flex items-center justify-between">
                <SectionLabel
                  icon={Briefcase}
                  label="Target Job Description"
                  color="text-[#ffafd3]"
                />
                <Badge color="secondary">Required</Badge>
              </div>

              <div className="flex-1 flex flex-col gap-2">
                <textarea
                  value={jobDescription}
                  onChange={(e) =>
                    e.target.value.length <= MAX_JD_CHARS &&
                    setJobDescription(e.target.value)
                  }
                  placeholder="Paste the full job description here… e.g. 'Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large-scale system design...'"
                  rows={12}
                  className="
                    w-full flex-1 resize-none rounded-2xl p-5
                    bg-[#060e20]/50 border border-white/8
                    text-[#dae2fd] placeholder:text-[#464554] text-[15px] leading-relaxed
                    focus:outline-none focus:border-[#8083ff]/60 focus:bg-[#060e20]/75
                    focus:shadow-[0_0_24px_rgba(128,131,255,0.12)]
                    transition-all duration-300
                  "
                />
                <div className="flex justify-end">
                  <span
                    className={`text-[11px] tabular-nums transition-colors ${
                      jdCount > MAX_JD_CHARS * 0.9
                        ? "text-[#ffb4ab]"
                        : "text-[#464554]"
                    }`}
                  >
                    {jdCount.toLocaleString()} / {MAX_JD_CHARS.toLocaleString()}{" "}
                    chars
                  </span>
                </div>
              </div>
            </section>

            {/* ── RIGHT: profile ── */}
            <section className="p-7 lg:p-9 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <SectionLabel
                  icon={User}
                  label="Your Profile"
                  color="text-[#c0c1ff]"
                />
                <Badge color="primary">Best Results</Badge>
              </div>

              {/* upload zone */}
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-semibold text-[#908fa0] tracking-wider uppercase">
                  Upload Resume
                </span>
                <div
                  onClick={() => !file && fileInputRef.current?.click()}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={onDrop}
                  className={`
                    relative rounded-2xl border-2 border-dashed p-8
                    flex flex-col items-center justify-center gap-3
                    transition-all duration-300 cursor-pointer group
                    ${
                      file
                        ? "border-[#8083ff]/50 bg-[#8083ff]/5"
                        : isDragging
                          ? "border-[#c0c1ff]/60 bg-[#c0c1ff]/5 scale-[1.01]"
                          : "border-white/10 hover:border-[#c0c1ff]/30 hover:bg-white/[0.02] bg-[#060e20]/30"
                    }
                  `}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.docx"
                    className="hidden"
                    onChange={(e) => handleFile(e.target.files[0])}
                  />

                  {file ? (
                    <>
                      <div className="w-10 h-10 rounded-xl bg-[#8083ff]/20 flex items-center justify-center">
                        <FileText size={20} className="text-[#c0c1ff]" />
                      </div>
                      <div className="text-center">
                        <p className="text-[13px] font-semibold text-[#dae2fd] truncate max-w-[200px]">
                          {file.name}
                        </p>
                        <p className="text-[11px] text-[#908fa0] mt-0.5">
                          {(file.size / 1024 / 1024).toFixed(2)} MB · Ready
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setFile(null);
                        }}
                        className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                      >
                        <X size={12} className="text-[#908fa0]" />
                      </button>
                      <CheckCircle2 size={16} className="text-[#8083ff]" />
                    </>
                  ) : (
                    <>
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300
                        ${isDragging ? "bg-[#c0c1ff]/20 scale-110" : "bg-white/5 group-hover:bg-[#c0c1ff]/10 group-hover:scale-105"}`}
                      >
                        <CloudUpload
                          size={20}
                          className={`transition-colors ${isDragging ? "text-[#c0c1ff]" : "text-[#908fa0] group-hover:text-[#c0c1ff]"}`}
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-[13px] font-semibold text-[#dae2fd]">
                          {isDragging
                            ? "Drop it here"
                            : "Click to upload or drag & drop"}
                        </p>
                        <p className="text-[11px] text-[#908fa0] mt-0.5">
                          PDF or DOCX (Max 5MB)
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-white/[0.07]" />
                <span className="text-[10px] font-bold tracking-widest text-[#464554]">
                  OR
                </span>
                <div className="flex-1 h-px bg-white/[0.07]" />
              </div>

              {/* self description */}
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-semibold text-[#908fa0] tracking-wider uppercase">
                  Quick Self-Description
                </span>
                <textarea
                  value={selfDescription}
                  onChange={(e) => setSelfDescription(e.target.value)}
                  placeholder="Briefly describe your experience, key skills, and years of experience if you don't have a resume handy..."
                  rows={4}
                  className="
                    w-full resize-none rounded-2xl p-5
                    bg-[#060e20]/50 border border-white/8
                    text-[#dae2fd] placeholder:text-[#464554] text-[15px] leading-relaxed
                    focus:outline-none focus:border-[#8083ff]/60 focus:bg-[#060e20]/75
                    focus:shadow-[0_0_24px_rgba(128,131,255,0.12)]
                    transition-all duration-300
                  "
                />
              </div>

              {/* pro tip */}
              <div className="rounded-2xl border border-[#8083ff]/25 bg-linear-to-br from-[#494bd6]/15 to-[#8083ff]/10 px-4 py-3 flex justify-center gap-3">
                <div className="shrink-0 mt-0.5">
                  <Info size={16} className="text-[#8083ff]" />
                </div>

                <p className="text-[13px] text-[#c7c4d7] leading-relaxed">
                  Either a <strong className="text-[#ffafd3]">Resume</strong> or
                  a <strong className="text-[#ffafd3]">Self Description</strong>{" "}
                  is required alongside the job description to generate your
                  personalized winning strategy.
                </p>
              </div>

              {/* submit button — desktop */}
              <div className="hidden md:flex justify-end pt-2 border-t border-white/6 mt-auto">
                <SubmitButton
                  isLoading={isLoading}
                  done={done}
                  disabled={!jobDescription.trim()}
                  onClick={handleSubmit}
                />
              </div>
            </section>
          </div>
        </div>

        {/* submit button — mobile sticky */}
        <div className="fixed bottom-0 inset-x-0 md:hidden p-4 bg-[#0b1326]/90 backdrop-blur-xl border-t border-white/6 z-50">
          <SubmitButton
            isLoading={isLoading}
            done={done}
            disabled={!jobDescription.trim()}
            onClick={handleSubmit}
            full
          />
        </div>
      </main>

      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient-shift 4s ease infinite;
        }
      `}</style>
    </div>
  );
}

// ─── submit button ─────────────────────────────────────────────────────────────
function SubmitButton({ isLoading, done, disabled, onClick, full }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        ${full ? "w-full" : "px-8"}
        relative py-4 rounded-2xl font-bold text-[13px] tracking-wide
        flex items-center justify-center gap-2.5
        transition-all duration-300 active:scale-[0.97]
        overflow-hidden
        ${
          done
            ? "bg-[#d97721] text-[#452000]"
            : disabled
              ? "bg-white/5 text-[#464554] cursor-not-allowed"
              : "text-[#07006c] shadow-[0_10px_30px_-8px_rgba(128,131,255,0.5)] hover:shadow-[0_16px_40px_-8px_rgba(128,131,255,0.7)] hover:-translate-y-0.5"
        }
      `}
      style={
        !done && !disabled
          ? {
              background:
                "linear-gradient(135deg, #8083ff 0%, #c0c1ff 50%, #ffafd3 100%)",
              backgroundSize: "200% 200%",
              animation: isLoading ? "none" : "gradient-shift 3s ease infinite",
            }
          : {}
      }
    >
      {isLoading ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          Processing Strategy…
        </>
      ) : done ? (
        <>
          <CheckCircle2 size={16} />
          Plan Generated!
        </>
      ) : (
        <>
          <Sparkles size={16} />
          Generate My Interview Strategy
        </>
      )}
    </button>
  );
}
