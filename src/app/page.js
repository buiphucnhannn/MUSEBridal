import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Gallery from "@/components/sections/Gallery";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
      <Pricing />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
