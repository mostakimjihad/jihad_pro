import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import BlogSection from "./components/BlogSection";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Experience />
      <ProjectsSection />
      <BlogSection />
      <ContactMe/>
    </>
  );
}
