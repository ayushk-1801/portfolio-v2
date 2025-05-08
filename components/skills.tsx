"use client";
import { GeistMono } from "geist/font";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

export const Skills = () => {
    const firstRow = siteConfig.techStack.slice(0, Math.ceil(siteConfig.techStack.length / 2));
    const secondRow = siteConfig.techStack.slice(Math.ceil(siteConfig.techStack.length / 2));

    const TechItem = ({ tech }: { tech: typeof siteConfig.techStack[0] }) => (
        <div className="flex-shrink-0 transition-all duration-300 hover:scale-105 hover:-translate-y-2 px-4">
            <div className="flex flex-col items-center gap-3">
                <div className="h-14 w-14 flex items-center justify-center">
                    <Image
                        src={tech.src}
                        alt={tech.name}
                        width={56}
                        height={56}
                        className="object-contain max-h-full max-w-full"
                    />
                </div>
                <span className={`text-xs text-gray-500 ${GeistMono.className}`}>
                    {tech.name}
                </span>
            </div>
        </div>
    );

    return (
        <div className="w-full mb-10">
            <h1 className={`text-xl font-bold ${GeistMono.className} mb-4`}>
                tech stack
            </h1>
            <div className="relative w-full overflow-hidden rounded-lg px-4 space-y-2">
                <div className="relative w-full">
                    <Marquee pauseOnHover className="[--duration:40s] py-6">
                        {firstRow.map((tech) => (
                            <TechItem key={tech.name} tech={tech} />
                        ))}
                    </Marquee>
                </div>

                <div className="relative w-full">
                    <Marquee reverse pauseOnHover className="[--duration:40s] py-6">
                        {secondRow.map((tech) => (
                            <TechItem key={tech.name} tech={tech} />
                        ))}
                    </Marquee>
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background/80 to-transparent"></div>
            </div>
        </div>
    );
};
