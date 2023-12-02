import { FaGithub, FaHandPeace } from "react-icons/fa6";
import SidebarItem from "./SidebarItem";
import globalState from "@/lib/globalState";

import { Sheet, SheetContent } from "@/components/ui/sheet";

function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = globalState();
  if (sidebarOpen) {
    return (
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side={"left"} className="w-56 py-4 px-1">
          <SidebarContents />
        </SheetContent>
      </Sheet>
    );
  }
  return (
    <div className="hidden sm:flex flex-col justify-between h-full bg-neutral-900">
      <SidebarContents />
    </div>
  );
}

function SidebarContents() {
  return (
    <div className="flex flex-col justify-between h-screen fixed top-0 left-0 overflow-y-auto w-56">
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
          <FaHandPeace className="h-7 w-7 sm:h-8 sm:w-8 text-white hover:text-neutral-500" />
        </a>
        <a href="https://github.com/azbauer8/Games">
          <FaGithub className="h-7 w-7 sm:h-8 sm:w-8 text-white hover:text-neutral-500" />
        </a>
      </div>
    </div>
  );
}

export const itemsArray = [
  {
    title: "Top Picks",
    isHeader: true,
    isLink: true,
    url: "/TopPicks",
  },
  { title: "New Releases", isHeader: true },
  {
    title: "Last 30 days",
    icon: "FaStar",
    isLink: true,
    url: "/Last30Days",
  },
  {
    title: "This past week",
    icon: "FaFire",
    isLink: true,
    url: "/ThisPastWeek",
  },
  { title: "Next week", icon: "FaForward", isLink: true, url: "/NextWeek" },
  {
    title: "This month",
    icon: "FaRegCalendar",
    isLink: true,
    url: "/ThisMonth",
  },
  { id: "top", title: "Top", isHeader: true },
  {
    title: "Best of this year",
    icon: "FaTrophy",
    isLink: true,
    url: "/BestOfThisYear",
  },
  {
    title: "Best of last year",
    icon: "IoPodium",
    isLink: true,
    url: "/BestOfLastYear",
  },
  {
    title: "Top all time",
    icon: "FaCrown",
    isLink: true,
    url: "/AllTimeBest",
  },
];
export default Sidebar;
