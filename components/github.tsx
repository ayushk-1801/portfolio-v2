import { GeistMono } from "geist/font"
import GitHubCalendar from "react-github-calendar";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const Github = () => {
    return (
        <div>
            <h1 className={`text-xl font-bold ${GeistMono.className} mb-8 flex items-center gap-2`}>
                github
                <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-400 transition-all">@ayushk-1801</Link>
            </h1>
            <div className="w-full flex justify-center">
                <GitHubCalendar
                    username="ayushk-1801"
                    colorScheme="dark"
                    fontSize={12}
                    blockSize={9.5}
                />
            </div>
        </div>
    )
}