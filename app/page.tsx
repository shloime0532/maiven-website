import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ChatSection from "@/components/ChatSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Testimonials />
        <ChatSection />
        <FinalCTA />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
