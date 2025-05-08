import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiGmail, SiGooglemeet } from "react-icons/si";
import { IoDocument } from "react-icons/io5";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-background text-foreground border-t border-border">
            <div className="mx-auto px-4 py-8 flex justify-between items-center mb-16 md:mb-32">
                <p className="text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Ayush
                </p>
                <div className="flex items-center gap-3">
                    <Link
                        href={siteConfig.links.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Twitter"
                    >
                        <FaXTwitter />
                    </Link>
                    <Link
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </Link>
                    <Link
                        href={siteConfig.links.linkedin || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </Link>
                    <Link
                        href={`mailto:${siteConfig.links.email || ""}`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Email"
                    >
                        <SiGmail />
                    </Link>
                    <Link
                        href={siteConfig.links.caldotcom}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Google Meet"
                    >
                        <SiGooglemeet />
                    </Link>
                    <Link href={siteConfig.links.resume || "#"} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Resume">
                        <IoDocument />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

