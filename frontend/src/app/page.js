import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Workflow from "@/components/home/Workflow";
import MatchScore from "@/components/home/MatchScore";
import InterviewPrep from "@/components/home/InterviewPrep";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

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
