"use client";

import globalState from "@/lib/state";
import { Icon } from "@iconify/react";

const Header = () => {
  const { setSidebarOpen } = globalState();
  return (
    <nav className="fixed bottom-3 right-3 z-50 max-w-fit cursor-pointer items-center rounded-2xl bg-white p-2 hover:bg-neutral-200 md:hidden">
      <Icon
        icon="ci:hamburger-md"
        className="size-11 text-neutral-900"
        onClick={() => setSidebarOpen(true)}
      />
    </nav>
  );
};

export default Header;
