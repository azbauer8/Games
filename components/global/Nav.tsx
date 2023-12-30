"use client";

import { Icon } from "@iconify/react";
import globalState from "@/lib/globalState";

const Header = () => {
  const { setSidebarOpen } = globalState();
  return (
    <nav className="md:hidden fixed bottom-3 right-3 p-2 items-center z-50 max-w-fit bg-white hover:bg-neutral-200 rounded-2xl cursor-pointer">
      <Icon
        icon="ci:hamburger-md"
        className="text-neutral-900 size-11"
        onClick={() => setSidebarOpen(true)}
      />
    </nav>
  );
};

export default Header;
