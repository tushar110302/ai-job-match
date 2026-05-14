import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Workflow from "@/components/Workflow";
import MatchScore from "@/components/MatchScore";
import InterviewPrep from "@/components/InterviewPrep";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0f] min-h-screen">
      <Navbar />
      <Hero />
      <Workflow />
      <MatchScore />
      <InterviewPrep />
      <CTA />
      <Footer />
    </main>
  );
}
