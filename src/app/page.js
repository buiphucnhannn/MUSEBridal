import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Collections from "@/components/sections/Collections";
import Packages from "@/components/sections/Packages";
import Experience from "@/components/sections/Experience";
import Pricing from "@/components/sections/Pricing";
import Offers from "@/components/sections/Offers";
import Moments from "@/components/sections/Moments";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Collections />
      <Packages />
      <Experience />
      <Pricing />
      <Offers />
      <Moments />
      <Contact />
    </>
  );
}
