import { GeistMono } from "geist/font";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export const Experience = () => {
    return (
        <div className="my-10">
            <h1 className={`text-xl font-bold ${GeistMono.className} mb-4`}>
                experience
            </h1>
            <div className="space-y-8">
                {siteConfig.experiences.map((experience, index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg">
                        <div className="flex-shrink-0 w-16 h-16 relative flex items-center justify-center rounded-md overflow-hidden border border-border">
                            {experience.logo && (
                                <Image 
                                    src={experience.logo} 
                                    alt={`${experience.company} logo`} 
                                    width={56} 
                                    height={56} 
                                    className="object-contain"
                                />
                            )}
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">{experience.position}</h3>
                            <div className="flex items-center justify-between gap-2">
                                <span className="font-medium">
                                    {experience.website ? (
                                        <Link href={experience.website} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">
                                            {experience.company}
                                        </Link>
                                    ) : (
                                        experience.company
                                    )}
                                </span>
                                <span className="text-sm text-gray-500">
                                    {experience.from} - {experience.to}
                                </span>
                            </div>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                {experience.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};