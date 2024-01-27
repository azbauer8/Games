"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icon } from "@iconify/react"

import { Drawer, DrawerContent } from "@/components/ui/drawer"

import sidebarItems from "./SidebarItems.json"

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
      <MenuButton setSidebarOpen={setSidebarOpen} />
      <Drawer open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <DrawerContent className="outline-none focus:outline-none">
          <DrawerContents setSidebarOpen={setSidebarOpen} />
        </DrawerContent>
      </Drawer>
      <div className="sticky top-0 hidden h-full w-64 flex-col justify-between bg-neutral-900 md:flex">
        <SidebarContents setSidebarOpen={setSidebarOpen} />
      </div>
    </>
  )
}

function SidebarContents({
  setSidebarOpen,
}: {
  setSidebarOpen: (open: boolean) => void
}) {
  return (
    <div className="flex h-screen w-56 flex-col overflow-y-auto">
      <div className="px-6 py-4 pt-16">
        <ul className="space-y-2 font-medium">
          <SidebarTitle
            title={sidebarItems[0].title}
            url={sidebarItems[0].url}
            setSidebarOpen={setSidebarOpen}
          />
          <SidebarHeader title={sidebarItems[1].title} />
          {sidebarItems[1].children?.map((link) => {
            return (
              <SidebarLink
                key={link.title}
                title={link.title}
                icon={link.icon}
                url={link.url}
                setSidebarOpen={setSidebarOpen}
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
                setSidebarOpen={setSidebarOpen}
              />
            )
          })}
        </ul>
      </div>
      <div className="flex justify-center space-x-5 py-8">
        <a href="https://byzach.dev">
          <Icon
            icon="fa6-solid:hand-peace"
            className="size-7 text-white hover:text-neutral-500 md:size-8"
          />
        </a>
        <a href="https://github.com/azbauer8/Games">
          <Icon
            icon="fa-brands:github"
            className="size-7 text-white hover:text-neutral-500 md:size-8"
          />
        </a>
      </div>
    </div>
  )
}

function DrawerContents({
  setSidebarOpen,
}: {
  setSidebarOpen: (open: boolean) => void
}) {
  return (
    <div className="relative mx-auto w-full max-w-2xl p-5 pb-20">
      <SidebarTitle
        title={sidebarItems[0].title}
        url={sidebarItems[0].url}
        isDrawer
        setSidebarOpen={setSidebarOpen}
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
                  setSidebarOpen={setSidebarOpen}
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
                  setSidebarOpen={setSidebarOpen}
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

function MenuButton({
  setSidebarOpen,
}: {
  setSidebarOpen: (open: boolean) => void
}) {
  return (
    <nav className="fixed bottom-3 right-3 z-50 max-w-fit cursor-pointer items-center rounded-2xl bg-white p-2 hover:bg-neutral-200 md:hidden">
      <Icon
        icon="ci:hamburger-md"
        className="size-11 text-neutral-900"
        onClick={() => setSidebarOpen(true)}
      />
    </nav>
  )
}

function SidebarTitle({
  url,
  title,
  isDrawer,
  setSidebarOpen,
}: {
  url?: string
  title: string
  isDrawer?: boolean
  setSidebarOpen: (open: boolean) => void
}) {
  return (
    <Link
      href={url ? url : "/"}
      className={`flex items-center ${
        isDrawer ? "py-2" : "p-2"
      } group rounded-lg text-white hover:text-neutral-500`}
      onClick={() => setSidebarOpen(false)}
    >
      <span className={`${isDrawer ? "text-4xl" : "text-3xl"} font-bold`}>
        {title}
      </span>
    </Link>
  )
}

function SidebarHeader({
  title,
  isDrawer,
}: {
  title: string
  isDrawer?: boolean
}) {
  return (
    <span
      className={`flex items-center p-2 ${
        isDrawer ? "text-lg" : "text-xl"
      } group rounded-lg text-white`}
    >
      {title}
    </span>
  )
}

function SidebarLink({
  url,
  title,
  icon,
  isDrawer,
  setSidebarOpen,
}: {
  url?: string
  title: string
  icon: string
  isDrawer?: boolean
  setSidebarOpen: (open: boolean) => void
}) {
  const pathname = usePathname()
  const urlCheck = url?.substring(1)
  return (
    <Link
      href={url ? url : "/"}
      className={`flex items-center ${
        isDrawer ? "bg-neutral-800 px-4 py-3" : "p-2"
      } group rounded-lg text-white`}
      onClick={() => setSidebarOpen(false)}
    >
      <Icon
        icon={icon ? icon : ""}
        className={`size-5 shrink-0 ${
          pathname === urlCheck ? "text-white" : "text-neutral-500"
        } transition duration-75 group-hover:text-white`}
      />

      <span
        className={`flex-1 ${isDrawer ? "ml-2" : "ml-3"} whitespace-nowrap`}
      >
        {title}
      </span>
    </Link>
  )
}
