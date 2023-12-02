"use client";

import { FaGithub, FaHandPeace } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import globalState from "@/lib/globalState";

const Header = () => {
  const { sidebarOpen, setSidebarOpen } = globalState();
  return (
    <nav className="md:hidden sticky top-0 z-50 flex p-3 items-center justify-between bg-clip-padding backdrop-filter backdrop-blur-3xl">
      <GiHamburgerMenu
        className="text-neutral-400 hover:text-white h-6 w-6 cursor-pointer"
        onClick={() => setSidebarOpen(true)}
      />
      <div className="flex flex-row space-x-4">
        <a href="https://byzach.dev">
          <FaHandPeace className="h-6 w-6 text-neutral-400 hover:text-white rounded-lg" />
        </a>
        <a href="https://github.com/azbauer8/Games">
          <FaGithub className="h-6 w-6 text-neutral-400 hover:text-white rounded-lg" />
        </a>
      </div>
    </nav>
  );
};

export default Header;
