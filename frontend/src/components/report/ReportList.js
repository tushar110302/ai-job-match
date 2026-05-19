"use client";

import { ArrowRight, FileText, Plus } from "lucide-react";
import Link from "next/link";

// ─── helpers ──────────────────────────────────────────────────────────────────
const formatDate = (iso) => {
  const d = new Date(iso);
  const now = new Date();
  const diffDays = Math.floor((now - d) / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;

  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: d.getFullYear() !== now.getFullYear() ? "numeric" : undefined,
  });
};

// ─── single report row ─────────────────────────────────────────────────────────
const ReportRow = ({ report, index }) => {
  return (
    <Link
      href={`/report/${report._id}`}
      className="group w-full flex items-center gap-4 px-5 py-4 rounded-2xl
    border border-white/5 bg-white/2
    hover:-translate-y-0.5
    hover:bg-white/5 hover:border-white/10
    active:translate-y-0 transition-all duration-200 text-left"
    >
      {/* index number */}
      <span
        className="shrink-0 w-7 h-7 rounded-lg bg-[#030b2b] border border-white/8 group-hover:bg-white/10 group-hover:text-white/60
        flex items-center justify-center text-[11px] font-black text-white/20 tabular-nums"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* icon */}
      <div
        className="shrink-0 w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/15
        flex items-center justify-center group-hover:bg-purple-500/15 transition-colors"
      >
        <FileText
          size={14}
          className="text-purple-400/70 group-hover:text-purple-300 transition-colors"
        />
      </div>

      {/* text */}
      <div className="flex-1 min-w-0">
        <p
          className="text-[14px] font-semibold text-white/80 group-hover:text-white
          truncate leading-tight transition-colors"
        >
          {report.title}
        </p>
        <p className="text-[11px] text-white/20 group-hover:text-white/40 mt-0.5 font-medium">
          {formatDate(report.createdAt)}
        </p>
      </div>

      {/* arrow */}
      <ArrowRight
        size={14}
        className="shrink-0 text-white/10 group-hover:text-white/40
          group-hover:translate-x-0.5 transition-all duration-200"
      />
    </Link>
  );
};

// ─── empty state ───────────────────────────────────────────────────────────────
const EmptyState = ({ onNew }) => (
  <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
    <div
      className="w-14 h-14 rounded-2xl bg-white/3 border border-white/6
      flex items-center justify-center mb-4"
    >
      <FileText size={22} className="text-white/15" />
    </div>
    <p className="text-white/40 text-sm font-semibold mb-1">No reports yet</p>
    <p className="text-white/20 text-xs mb-5 max-w-45 leading-relaxed">
      Generate your first report to get started
    </p>
    <Link
      href="/report/new"
    //   onClick={onNew}
      className="flex items-center gap-2 px-4 py-2 rounded-xl
        bg-purple-500/10 border border-purple-500/20 text-purple-300
        text-xs font-bold hover:bg-purple-500/15 transition-all"
    >
      <Plus size={13} />
      New Report
    </Link>
  </div>
);

// ─── main component ────────────────────────────────────────────────────────────
const ReportsList = ({ reports = [] }) => {

  return (
    <div className="w-full max-w-md mx-auto mt-6 px-4">
      <div className="flex items-start justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <p className="text-[11px] font-black text-white/40 uppercase tracking-[0.2em]">
            Your Reports
          </p>
          {reports.length > 0 && (
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full
              bg-white/5 border border-white/8 text-white/70 tabular-nums"
            >
              {reports.length}
            </span>
          )}
        </div>

        {reports.length > 0 && (
          <Link
            href={"/report/new"}
            className="flex items-center gap-1.5 text-[12px] font-bold
              text-purple-400/60 hover:text-purple-300 uppercase tracking-[0.2em] transition-colors"
          >
            <Plus size={12} />
            New
          </Link>
        )}
      </div>

      {/* list */}
      {reports.length === 0 ? (
        <EmptyState  />
      ) : (
        <div className="space-y-9">
          {reports.map((report, i) => (
            <ReportRow key={report._id} report={report} index={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ReportsList;
