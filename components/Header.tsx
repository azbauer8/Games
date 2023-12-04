"use client";

import { Icon } from "@iconify/react";
import globalState from "@/lib/globalState";

const Header = () => {
  const { setSidebarOpen } = globalState();
  return (
    <nav className="md:hidden sticky top-0 z-50 flex p-3 items-center justify-between bg-clip-padding backdrop-filter backdrop-blur-3xl">
      <Icon
        icon="ci:hamburger-md"
        className="text-neutral-400 hover:text-white h-8 w-8 cursor-pointer"
        onClick={() => setSidebarOpen(true)}
      />
      <div className="flex flex-row space-x-4">
        <a href="https://byzach.dev">
          <Icon
            icon="fa6-solid:hand-peace"
            className="h-8 w-8 text-neutral-400 hover:text-white rounded-lg"
          />
        </a>
        <a href="https://github.com/azbauer8/Games">
          <Icon
            icon="fa-brands:github"
            className="h-8 w-8 text-neutral-400 hover:text-white rounded-lg"
          />
        </a>
      </div>
    </nav>
  );
};

export default Header;
