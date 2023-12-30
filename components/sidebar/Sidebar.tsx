import { Icon } from "@iconify/react";
import SidebarItem from "@/components/sidebar/SidebarItem";
import globalState from "@/lib/globalState";
import sidebarItems from "./SidebarItems.json";
import drawerItems from "./DrawerItems.json";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { DrawerHeader, DrawerTitle, DrawerLink } from "./DrawerItem";

function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = globalState();
  return (
    <>
      <Drawer open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <DrawerContent className="mx-auto w-full outline-none focus:outline-none h-1/2 sm:h-[45vh]">
          <DrawerContents />
        </DrawerContent>
      </Drawer>
      <div className="hidden md:flex flex-col justify-between h-full bg-neutral-900 w-64 sticky top-0">
        <SidebarContents />
      </div>
    </>
  );
}

function SidebarContents() {
  return (
    <div className="flex flex-col h-screen overflow-y-auto w-56">
      <div className="px-6 py-4 pt-16">
        <ul className="space-y-2 font-medium">
          {sidebarItems.map((item) => (
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
          <Icon
            icon="fa6-solid:hand-peace"
            className="h-7 w-7 md:h-8 md:w-8 text-white hover:text-neutral-500"
          />
        </a>
        <a href="https://github.com/azbauer8/Games">
          <Icon
            icon="fa-brands:github"
            className="h-7 w-7 md:h-8 md:w-8 text-white hover:text-neutral-500"
          />
        </a>
      </div>
    </div>
  );
}

function DrawerContents() {
  return (
    <>
      <div className="px-5 pt-5 space-y-2 max-w-3xl mx-auto">
        <DrawerTitle title={drawerItems[0].title} url={drawerItems[0].url} />
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4">
          <div className="w-full sm:w-1/2">
            <DrawerHeader title={drawerItems[1].title} />
            <div className="grid grid-cols-2 gap-2">
              {drawerItems[1].children?.map((link) => {
                return (
                  <DrawerLink
                    key={link.title}
                    title={link.title}
                    icon={link.icon}
                    url={link.url}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <DrawerHeader title={drawerItems[2].title} />
            <div className="grid grid-cols-2 gap-2">
              {" "}
              {drawerItems[2].children?.map((link) => {
                return (
                  <DrawerLink
                    key={link.title}
                    title={link.title}
                    icon={link.icon}
                    url={link.url}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <a href="https://zachbauer.me" className="bottom-6 right-[84px] fixed">
        <Icon
          icon="fa6-solid:hand-peace"
          className="size-8 text-white hover:text-neutral-500"
        />
      </a>
      <a
        href="https://github.com/azbauer8/Games"
        className="bottom-6 right-6 fixed"
      >
        <Icon
          icon="fa-brands:github"
          className="size-8 text-white hover:text-neutral-500"
        />
      </a>
    </>
  );
}

export default Sidebar;
