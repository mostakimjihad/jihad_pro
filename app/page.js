import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <BlogSection />
    </>
  );
}
