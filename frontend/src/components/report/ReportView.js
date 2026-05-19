"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Code2,
  MessageSquare,
  Map,
  AlertTriangle,
  Info,
  ChevronDown,
  Lightbulb,
  ArrowLeft,
  Download,
  Zap,
  CheckCircle,
  AlertCircle,
  Circle,
} from "lucide-react";
import useInterview from "@/hooks/useInterview";
import Link from "next/link";
import DashboardHeader from "../auth/dashboard/DashboardHeader";

// ─── severity config ───────────────────────────────────────────────────────────
const SEVERITY = {
  high: {
    label: "High",
    cls: "bg-[#ef4444]/10 border-[#ef4444]/25 text-[#ef4444]",
    dot: "bg-[#ef4444]",
  },
  medium: {
    label: "Medium",
    cls: "bg-[#f59e0b]/10 border-[#f59e0b]/25 text-[#f59e0b]",
    dot: "bg-[#f59e0b]",
  },
  low: {
    label: "Low",
    cls: "bg-[#10b981]/10 border-[#10b981]/25 text-[#10b981]",
    dot: "bg-[#10b981]",
  },
};

// ─── tabs config ───────────────────────────────────────────────────────────────
const TABS = [
  { id: "technical", label: "Technical", icon: Code2 },
  { id: "behavioral", label: "Behavioral", icon: MessageSquare },
  { id: "roadmap", label: "Road Map", icon: Map },
];

// ─── match score ring ──────────────────────────────────────────────────────────
const ScoreRing = ({ score }) => {
  const r = 42;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  const color = score >= 75 ? "#10b981" : score >= 50 ? "#f59e0b" : "#ef4444";
  const label =
    score >= 75
      ? "Strong match for this role"
      : score >= 50
        ? "Moderate match for this role"
        : "Weak match — upskilling needed";

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-36 h-36 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="transparent"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="transparent"
            stroke={color}
            strokeWidth="8"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-4xl font-black text-white leading-none">
            {score}
          </span>
          <span className="text-[10px] font-bold text-[#464554] uppercase tracking-widest mt-1">
            Match %
          </span>
        </div>
      </div>
      <p
        className="text-sm font-bold uppercase tracking-wider"
        style={{ color }}
      >
        {label}
      </p>
    </div>
  );
};

// ─── question card ─────────────────────────────────────────────────────────────
const QuestionCard = ({ q, index, type }) => {
  const [open, setOpen] = useState(false);
  const color = type === "technical" ? "#d63384" : "#8083ff";
  const prefix = type === "technical" ? "T" : "B";

  return (
    <div
      className={`rounded-xl border transition-all duration-300 overflow-hidden
        ${open ? "border-white/10 bg-[#131b2e]" : "border-white/[0.05] bg-[#0f1728] hover:border-white/10"}`}
    >
      {/* header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-5 flex items-start gap-4 text-left group"
      >
        <span
          className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black"
          style={{ background: `${color}18`, color }}
        >
          {prefix}
          {index + 1}
        </span>
        <p className="flex-1 text-[#c7c4d7] font-medium leading-snug text-[15px] group-hover:text-white transition-colors">
          {q.question}
        </p>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-[#464554] transition-transform duration-300 mt-0.5
            ${open ? "rotate-180 text-[#908fa0]" : ""}`}
        />
      </button>

      {/* expanded */}
      {open && (
        <div className="px-5 pb-5 pl-[68px] space-y-5 border-t border-white/[0.05] pt-5">
          {/* intention */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Info size={12} className="text-[#6366f1]" />
              <span className="text-[10px] font-black text-[#6366f1] uppercase tracking-[0.18em]">
                Intention
              </span>
            </div>
            <p className="text-sm text-[#908fa0] leading-relaxed">
              {q.intention}
            </p>
          </div>

          {/* answer */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lightbulb size={12} className="text-[#10b981]" />
              <span className="text-[10px] font-black text-[#10b981] uppercase tracking-[0.18em]">
                How to Answer
              </span>
            </div>
            <p className="text-sm text-[#908fa0] leading-relaxed">{q.answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── skill gap pill ────────────────────────────────────────────────────────────
const SkillGapPill = ({ skill, severity }) => {
  const s = SEVERITY[severity] || SEVERITY.low;
  return (
    <div
      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-xs font-semibold ${s.cls}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.dot}`} />
      {skill}
      <span className="ml-auto text-[10px] font-black uppercase tracking-wider opacity-60">
        {s.label}
      </span>
    </div>
  );
};

// ─── roadmap day card ──────────────────────────────────────────────────────────
const RoadmapDay = ({ day, focus, tasks, index }) => {
  const [open, setOpen] = useState(index === 0);
  return (
    <div
      className={`rounded-xl border transition-all duration-200 overflow-hidden
      ${open ? "border-[#8083ff]/30 bg-[#131b2e]" : "border-white/[0.05] bg-[#0f1728] hover:border-white/10"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-5 flex items-center gap-4 text-left"
      >
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black flex-shrink-0 transition-all
          ${open ? "bg-[#8083ff]/20 text-[#c0c1ff]" : "bg-white/5 text-[#464554]"}`}
        >
          D{day}
        </div>
        <div className="flex-1 min-w-0">
          <p
            className={`font-semibold text-[15px] transition-colors ${open ? "text-white" : "text-[#c7c4d7]"}`}
          >
            {focus}
          </p>
          <p className="text-[11px] text-[#464554] mt-0.5">
            {tasks.length} tasks
          </p>
        </div>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 text-[#464554] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul className="px-5 pb-5 pl-[72px] space-y-2.5 border-t border-white/[0.05] pt-4">
          {tasks.map((task, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-[#908fa0] leading-relaxed"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#8083ff]/50 flex-shrink-0 mt-2" />
              {task}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// ─── skeleton loader ───────────────────────────────────────────────────────────
const Skeleton = () => (
  <div className="animate-pulse space-y-4 p-6">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="h-16 rounded-xl bg-white/5" />
    ))}
  </div>
);

// ─── main component ────────────────────────────────────────────────────────────
export default function ReportView() {
  const { id } = useParams();
  const { report, loading, getReportById, getResumePdf } = useInterview();
  const [activeTab, setActiveTab] = useState("technical");
  const tabBarRef = useRef(null);
  console.log(id);
  useEffect(() => {
    if (id) getReportById({ interview_id: id });
  }, [id]);

  // scroll active tab into view on mobile
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    const btn = tabBarRef.current?.querySelector(`[data-tab="${tabId}"]`);
    btn?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const technicalQuestions = report?.technicalQuestions || [];
  const behavioralQuestions = report?.behavioralQuestions || [];
  const skillGaps = report?.skillGaps || [];
  const preparationPlan = report?.preparationPlan || [];

  return (
    <div className="min-h-screen bg-[#060e20] text-[#dae2fd] font-sans">
      {/* ── ambient ── */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#494bd6]/8 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#d63384]/5 blur-[120px]" />
      </div>

      {/* ── header ── */}
      <DashboardHeader />

      {/* ── desktop layout ── */}
      <div className=" min-h-screen md:flex">
        {/* left sidebar — desktop only */}
        <aside
          className="hidden md:flex
    max-w-64
    border-r border-white/6
    bg-[#0b1326]
    py-6 px-2
    flex-col
    gap-8
    sticky top-16
    h-[calc(100vh-4rem)]
    overflow-y-auto"
        >
          <div>
            <p className="text-[10px] font-black text-[#464554] uppercase tracking-[0.2em] mb-4">
              Sections
            </p>
            <nav className="space-y-1">
              {TABS.map(({ id: tabId, label, icon: Icon }) => (
                <button
                  key={tabId}
                  onClick={() => setActiveTab(tabId)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all text-left
                    ${
                      activeTab === tabId
                        ? "bg-[#d63384]/10 text-[#d63384] border border-[#d63384]/20"
                        : "text-[#464554] hover:bg-white/[0.04] hover:text-[#908fa0]"
                    }`}
                >
                  <Icon size={16} />
                  {label}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-auto pt-6 border-t border-white/[0.06]">
            <Link
              href={"/report/new"}
              className="w-full py-2.5 rounded-xl bg-[#6366f1]/15 border border-[#6366f1]/25 text-[#8083ff] text-sm font-semibold hover:bg-[#6366f1]/25 transition-all flex items-center justify-center gap-2"
            >
              <Zap size={14} />
              New Report
            </Link>
          </div>
        </aside>

        {/* main content */}
        <main
          className="flex-1
    min-w-0
    px-4 md:px-8 lg:px-10
    py-8"
        >
          {/* ── mobile: score + skill gaps ── */}
          <div className="md:hidden space-y-6 mb-6">
            {loading ? (
              <div className="h-48 rounded-2xl bg-white/[0.03] border border-white/[0.05] animate-pulse" />
            ) : report ? (
              <>
                <div className="rounded-2xl border border-white/[0.06] bg-[#0f1728] p-8 flex flex-col items-center">
                  <ScoreRing score={report.matchScore} />
                </div>

                {skillGaps.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-[10px] font-black text-[#464554] uppercase tracking-[0.2em]">
                      Skill Gaps
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {skillGaps.map((g, i) => (
                        <SkillGapPill key={i} {...g} />
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : null}
          </div>

          {/* ── mobile: title ── */}
          {/* {report && (
            <div className="md:hidden mb-4">
              <p className="text-[10px] font-black text-[#464554] uppercase tracking-[0.2em] mb-1">
                Report
              </p>
              <h1 className="text-xl font-black text-white">{report.title}</h1>
            </div>
          )} */}

          {/* ── desktop: title ── */}
          {report && (
            <div className="hidden md:flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-black text-white">
                  {report.title}
                </h1>
                <p className="text-[#464554] text-sm mt-1">
                  Generated{" "}
                  {new Date(report.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          )}

          {/* ── tab bar ── */}
          <div
            ref={tabBarRef}
            className="sticky top-16 z-40 -mx-4 px-4 md:-mx-0 md:px-0 py-3 bg-[#060e20]/95 backdrop-blur-xl border-b border-white/[0.06] mb-6 flex gap-2 overflow-x-auto no-scrollbar"
          >
            {TABS.map(({ id: tabId, label, icon: Icon }) => (
              <button
                key={tabId}
                data-tab={tabId}
                onClick={() => handleTabChange(tabId)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap text-sm font-semibold transition-all flex-shrink-0
                  ${
                    activeTab === tabId
                      ? "bg-[#6366f1]/15 text-[#8083ff] border border-[#6366f1]/25"
                      : "text-[#464554] hover:text-[#908fa0]"
                  }`}
              >
                <Icon size={14} />
                {label}
                {tabId === "technical" && technicalQuestions.length > 0 && (
                  <span className="ml-1 text-[10px] bg-white/[0.08] px-1.5 py-0.5 rounded-full text-[#464554]">
                    {technicalQuestions.length}
                  </span>
                )}
                {tabId === "behavioral" && behavioralQuestions.length > 0 && (
                  <span className="ml-1 text-[10px] bg-white/[0.08] px-1.5 py-0.5 rounded-full text-[#464554]">
                    {behavioralQuestions.length}
                  </span>
                )}
                {tabId === "roadmap" && preparationPlan.length > 0 && (
                  <span className="ml-1 text-[10px] bg-white/[0.08] px-1.5 py-0.5 rounded-full text-[#464554]">
                    {preparationPlan.length}d
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* ── content ── */}
          {loading ? (
            <Skeleton />
          ) : !report ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <AlertCircle size={40} className="text-[#464554] mb-4" />
              <p className="text-[#464554] font-semibold">Report not found</p>
            </div>
          ) : (
            <>
              {activeTab === "technical" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-lg font-black text-white">
                      Technical Questions
                    </h2>
                    <span className="text-[11px] bg-white/[0.05] border border-white/[0.08] px-3 py-1 rounded-full text-[#464554] font-semibold">
                      {technicalQuestions.length} questions
                    </span>
                  </div>
                  {technicalQuestions.map((q, i) => (
                    <QuestionCard key={i} q={q} index={i} type="technical" />
                  ))}
                </div>
              )}

              {activeTab === "behavioral" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-lg font-black text-white">
                      Behavioral Questions
                    </h2>
                    <span className="text-[11px] bg-white/[0.05] border border-white/[0.08] px-3 py-1 rounded-full text-[#464554] font-semibold">
                      {behavioralQuestions.length} questions
                    </span>
                  </div>
                  {behavioralQuestions.map((q, i) => (
                    <QuestionCard key={i} q={q} index={i} type="behavioral" />
                  ))}
                </div>
              )}

              {activeTab === "roadmap" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-lg font-black text-white">
                      Preparation Road Map
                    </h2>
                    <span className="text-[11px] bg-white/[0.05] border border-white/[0.08] px-3 py-1 rounded-full text-[#464554] font-semibold">
                      {preparationPlan.length} days
                    </span>
                  </div>

                  <div className="relative">
                    <div className="hidden md:block absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-[#8083ff]/30 via-[#8083ff]/10 to-transparent" />
                    <div className="space-y-3">
                      {preparationPlan.map((plan, i) => (
                        <RoadmapDay key={i} {...plan} index={i} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-10 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#131b2e] to-[#0b1326] p-6 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#6366f1]/5 blur-[60px] pointer-events-none" />
                <div className="flex items-center gap-2 mb-4">
                  <Zap size={14} className="text-[#6366f1]" />
                  <p className="text-[10px] font-black text-[#6366f1] uppercase tracking-[0.2em]">
                    AI Verdict
                  </p>
                </div>
                <p className="text-[#908fa0] leading-relaxed text-[15px]">
                  Based on the analysis, this profile shows a{" "}
                  <span className="text-white font-bold">
                    {report.matchScore}% match
                  </span>{" "}
                  for the{" "}
                  <span className="text-white font-bold">{report.title}</span>{" "}
                  role.{" "}
                  {report.matchScore >= 75
                    ? "Strong alignment with job requirements. Focus on bridging the skill gaps to maximize your chances."
                    : report.matchScore >= 50
                      ? "Moderate alignment. Dedicated preparation using the road map will significantly improve your readiness."
                      : "Significant upskilling needed. Use the preparation plan as a structured guide to close critical gaps."}
                </p>

                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/[0.05]">
                  {skillGaps.slice(0, 3).map((g, i) => {
                    const Icon =
                      g.severity === "high"
                        ? AlertCircle
                        : g.severity === "medium"
                          ? AlertTriangle
                          : CheckCircle;
                    const color =
                      g.severity === "high"
                        ? "#ef4444"
                        : g.severity === "medium"
                          ? "#f59e0b"
                          : "#10b981";
                    return (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#060e20]"
                        style={{ background: color }}
                      >
                        <Icon size={10} className="text-white" />
                      </div>
                    );
                  })}
                  <span className="text-[11px] font-bold text-[#464554] uppercase tracking-wider">
                    {skillGaps.filter((g) => g.severity === "high").length}{" "}
                    critical ·{" "}
                    {skillGaps.filter((g) => g.severity === "medium").length}{" "}
                    moderate gaps
                  </span>
                </div>
              </div>
            </>
          )}
        </main>

        {/* right sidebar */}
        <aside
          className="
    hidden md:flex
    max-w-[300px]
    border-l border-white/[0.06]
    bg-[#0b1326]
    p-6
    flex-col
    justify-between
    sticky top-16
    h-[calc(100vh-4rem)]
    overflow-y-auto
  "
        >
          <div className="space-y-8">
            {/* score */}
            {report && (
              <div>
                <p className="text-[10px] font-black text-[#464554] uppercase tracking-[0.2em] mb-6">
                  Match Score
                </p>

                <div className="flex justify-center">
                  <ScoreRing score={report.matchScore} />
                </div>
              </div>
            )}

            {/* skill gaps */}
            {skillGaps.length > 0 && (
              <div className="border-t border-white/[0.06] pt-6">
                <p className="text-[10px] font-black text-[#464554] uppercase tracking-[0.2em] mb-4">
                  Skill Gaps
                </p>

                <div className="space-y-2">
                  {skillGaps.map((g, i) => (
                    <SkillGapPill key={i} {...g} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* bottom action */}
          <div className="pt-6 border-t border-white/[0.06]">
            <button
              onClick={() => getResumePdf(id)}
              className=" w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.03]  hover:bg-white/[0.07] text-[#908fa0] hover:text-white transition-all text-sm font-semibold"
            >
              <Download size={14} />
              Export PDF
            </button>
          </div>
        </aside>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
