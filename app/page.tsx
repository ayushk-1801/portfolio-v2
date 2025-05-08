import { Github } from "@/components/github";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Experience />
      <Github />
    </div>
  );
}
