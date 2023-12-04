import { FaGithub, FaHandPeace } from "react-icons/fa6";
import SidebarItem from "@/components/sidebar/SidebarItem";
import globalState from "@/lib/globalState";
import itemsArray from "./SidebarItems.json";
import { Sheet, SheetContent } from "@/components/ui/sheet";

function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = globalState();
  return (
    <>
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side={"left"} className="w-56 py-4 px-1">
          <SidebarContents />
        </SheetContent>
      </Sheet>
      <div className="hidden md:flex flex-col justify-between h-full bg-neutral-900 w-64 sticky top-0">
        <SidebarContents />
      </div>
    </>
  );
}

function SidebarContents() {
  return (
    <div className="flex flex-col justify-between h-screen overflow-y-auto w-56">
      <div className="px-6 py-4 pt-16">
        <ul className="space-y-2 font-medium">
          {itemsArray.map((item) => (
            <SidebarItem
              key={item.title}
              title={item.title}
              {...(item.icon && { icon: item.icon })}
              {...(item.isHeader && {
                isHeader: item.isHeader,
              })}
              {...(item.isLink && { isLink: item.isLink })}
              {...(item.url && { url: item.url })}
            />
          ))}
        </ul>
      </div>
      <div className="flex justify-center space-x-5 py-8">
        <a href="https://zachbauer.me">
          <FaHandPeace className="h-7 w-7 md:h-8 md:w-8 text-white hover:text-neutral-500" />
        </a>
        <a href="https://github.com/azbauer8/Games">
          <FaGithub className="h-7 w-7 md:h-8 md:w-8 text-white hover:text-neutral-500" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
