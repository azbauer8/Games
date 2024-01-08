import { Icon } from "@iconify/react"

import globalState from "@/lib/state"
import { Drawer, DrawerContent } from "@/components/ui/drawer"
import {
  SidebarHeader,
  SidebarLink,
  SidebarTitle,
} from "@/components/Sidebar/SidebarItem"

import sidebarItems from "./SidebarItems.json"

function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = globalState()
  return (
    <>
      <Drawer open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <DrawerContent className="outline-none focus:outline-none">
          <DrawerContents />
        </DrawerContent>
      </Drawer>
      <div className="sticky top-0 hidden h-full w-64 flex-col justify-between bg-neutral-900 md:flex">
        <SidebarContents />
      </div>
    </>
  )
}

function SidebarContents() {
  return (
    <div className="flex h-screen w-56 flex-col overflow-y-auto">
      <div className="px-6 py-4 pt-16">
        <ul className="space-y-2 font-medium">
          <SidebarTitle
            title={sidebarItems[0].title}
            url={sidebarItems[0].url}
          />
          <SidebarHeader title={sidebarItems[1].title} />
          {sidebarItems[1].children?.map((link) => {
            return (
              <SidebarLink
                key={link.title}
                title={link.title}
                icon={link.icon}
                url={link.url}
              />
            )
          })}
          <SidebarHeader title={sidebarItems[2].title} />
          {sidebarItems[2].children?.map((link) => {
            return (
              <SidebarLink
                key={link.title}
                title={link.title}
                icon={link.icon}
                url={link.url}
              />
            )
          })}
        </ul>
      </div>
      <div className="flex justify-center space-x-5 py-8">
        <a href="https://byzach.dev">
          <Icon
            icon="fa6-solid:hand-peace"
            className="h-7 w-7 text-white hover:text-neutral-500 md:h-8 md:w-8"
          />
        </a>
        <a href="https://github.com/azbauer8/Games">
          <Icon
            icon="fa-brands:github"
            className="h-7 w-7 text-white hover:text-neutral-500 md:h-8 md:w-8"
          />
        </a>
      </div>
    </div>
  )
}

function DrawerContents() {
  return (
    <div className="relative mx-auto w-full max-w-2xl p-5 pb-20">
      <SidebarTitle
        title={sidebarItems[0].title}
        url={sidebarItems[0].url}
        isDrawer
      />
      <div className="flex flex-col space-x-0 sm:flex-row sm:space-x-4">
        <div className="w-full sm:w-1/2">
          <SidebarHeader title={sidebarItems[1].title} isDrawer />
          <div className="grid grid-cols-2 gap-2">
            {sidebarItems[1].children?.map((link) => {
              return (
                <SidebarLink
                  key={link.title}
                  title={link.title}
                  icon={link.icon}
                  url={link.url}
                  isDrawer
                />
              )
            })}
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <SidebarHeader title={sidebarItems[2].title} isDrawer />
          <div className="grid grid-cols-2 gap-2">
            {sidebarItems[2].children?.map((link) => {
              return (
                <SidebarLink
                  key={link.title}
                  title={link.title}
                  icon={link.icon}
                  url={link.url}
                  isDrawer
                />
              )
            })}
          </div>
        </div>
      </div>
      <a href="https://byzach.dev" className="absolute bottom-6 right-[84px]">
        <Icon
          icon="fa6-solid:hand-peace"
          className="size-8 text-white hover:text-neutral-500"
        />
      </a>
      <a
        href="https://github.com/azbauer8/Games"
        className="absolute bottom-6 right-6"
      >
        <Icon
          icon="fa-brands:github"
          className="size-8 text-white hover:text-neutral-500"
        />
      </a>
    </div>
  )
}

export default Sidebar
