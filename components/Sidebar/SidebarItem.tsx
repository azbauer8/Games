import Link from "next/link"
import { useRouter } from "next/router"
import { Icon } from "@iconify/react"

import globalState from "@/lib/state"

export const SidebarTitle = ({
  url,
  title,
  isDrawer,
}: {
  url?: string
  title: string
  isDrawer?: boolean
}) => {
  const { setSidebarOpen } = globalState()
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

export const SidebarHeader = ({
  title,
  isDrawer,
}: {
  title: string
  isDrawer?: boolean
}) => {
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

export const SidebarLink = ({
  url,
  title,
  icon,
  isDrawer,
}: {
  url?: string
  title: string
  icon: string
  isDrawer?: boolean
}) => {
  const { setSidebarOpen } = globalState()
  const router = useRouter()
  const currentPage = router.query.page as string
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
        className={`h-5 w-5 shrink-0 ${
          currentPage === urlCheck ? "text-white" : "text-neutral-500"
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
