import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="flex items-center gap-4">
        <Link className="hover:text-gray-300 transition-all" href="/">
          about
        </Link>
        <Link className="hover:text-gray-300 transition-all" href="/projects">
          projects
        </Link>
        <Link className="hover:text-gray-300 transition-all" href="/blogs">
          blogs
        </Link>
      </div>
    </div>
  );
};
