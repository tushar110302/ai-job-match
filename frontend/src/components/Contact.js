"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2 } from "lucide-react";
import Navbar from "./Navbar";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const _handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1600)); // TODO: wire to API
    setLoading(false);
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans overflow-x-hidden">
      <style>{`
        @keyframes fade-up  { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }

        .field {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 14px 16px;
          color: rgba(226,218,255,0.85);
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .field::placeholder { color: rgba(255,255,255,0.18); }
        .field:focus {
          border-color: rgba(139,92,246,0.45);
          background: rgba(139,92,246,0.04);
          box-shadow: 0 0 20px rgba(139,92,246,0.08);
        }
      `}</style>

      {/* glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-10 -right-15 w-[500px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(88,28,220,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[350px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(30,58,138,0.14) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <Navbar/>

      <main className="pt-32 pb-24 relative z-1">
        <div className="w-full md:max-w-3/4 mx-auto px-3 md:px-6">
          {/* header */}
          <div
            className="mb-16 max-w-2xl ml-3 md:ml-0"
            style={{
              animation: "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
            }}
          >
            <p className="text-[11px] font-black text-purple-400/60 uppercase tracking-[0.3em] mb-5">
              Contact
            </p>
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-tight tracking-tight mb-5"
              style={{
                color: "rgba(230,225,255,0.95)",
              }}
            >
              We&apos;d love to
              <br />
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1.5px rgba(139,92,246,0.5)",
                }}
              >
                hear from you.
              </span>
            </h1>
            <p className="text-white/35 leading-relaxed">
              Have a question, found a bug, or just want to say something? Drop
              us a message and we&apos;ll get back to you.
            </p>
          </div>

          <div
            className="rounded-3xl border border-white/5 bg-[#0f0f1a] p-8 relative overflow-hidden md:max-w-3/4 mx-auto"
            style={{
              animation: "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both",
            }}
          > 

            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5">
                  <CheckCircle2 size={24} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-black mb-2">Message sent</h3>
                <p className="text-sm text-white/30">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={_handleSubmit} className="space-y-4 relative ">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black text-white/25 uppercase tracking-widest">
                      Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="field"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black text-white/25 uppercase tracking-widest">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="field"
                      placeholder="john@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-white/25 uppercase tracking-widest">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="field"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-white/25 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="field resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.9), rgba(99,102,241,0.9))",
                    color: "rgba(240,235,255,0.95)",
                    boxShadow: "0 0 30px rgba(139,92,246,0.2)",
                  }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={15} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    "Send message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
