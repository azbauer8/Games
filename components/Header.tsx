"use client";

import { Icon } from "@iconify/react";
import globalState from "@/lib/globalState";

const Header = () => {
  const { setSidebarOpen } = globalState();
  return (
    <nav className="md:hidden sticky top-0 p-3 items-center z-50 max-w-fit bg-clip-padding backdrop-filter backdrop-blur-3xl rounded-br-lg">
      <Icon
        icon="ci:hamburger-md"
        className="text-neutral-400 hover:text-white h-8 w-8 cursor-pointer "
        onClick={() => setSidebarOpen(true)}
      />
    </nav>
  );
};

export default Header;
