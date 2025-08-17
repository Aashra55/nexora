import Hero from "@/app/components/hero";
import Features from "@/app/components/features";
import Courses from "@/app/components/courses";
import FAQ from "@/app/components/faq";
import CTA from "@/app/components/cta";
import Footer from "@/app/components/footer";
import About from "./about";
import Contact from "./contact";
import Testimonials from "./testimonials";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Hero />
        <Features />
        <About/>
        <Courses />
        <Testimonials/>
        <FAQ />
        <CTA />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}
