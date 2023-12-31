import globalState from "@/lib/state";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

export const SidebarTitle = ({
  url,
  title,
  isDrawer,
}: {
  url?: string;
  title: string;
  isDrawer?: boolean;
}) => {
  const { setSidebarOpen } = globalState();
  return (
    <Link
      href={url ? url : "/"}
      className={`flex items-center ${
        isDrawer ? "py-2" : "p-2"
      } text-white rounded-lg hover:text-neutral-500 group`}
      onClick={() => setSidebarOpen(false)}
    >
      <span className={`${isDrawer ? "text-4xl" : "text-3xl"} font-bold`}>
        {title}
      </span>
    </Link>
  );
};

export const SidebarHeader = ({
  title,
  isDrawer,
}: {
  title: string;
  isDrawer?: boolean;
}) => {
  return (
    <span
      className={`flex items-center p-2 ${
        isDrawer ? "text-lg" : "text-xl"
      } text-white rounded-lg group`}
    >
      {title}
    </span>
  );
};

export const SidebarLink = ({
  url,
  title,
  icon,
  isDrawer,
}: {
  url?: string;
  title: string;
  icon: string;
  isDrawer?: boolean;
}) => {
  const { setSidebarOpen } = globalState();
  const router = useRouter();
  const currentPage = router.query.page as string;
  const urlCheck = url?.substring(1);
  return (
    <Link
      href={url ? url : "/"}
      className={`flex items-center ${
        isDrawer ? "py-3 px-4 bg-neutral-800" : "p-2"
      } text-white rounded-lg group`}
      onClick={() => setSidebarOpen(false)}
    >
      <Icon
        icon={icon ? icon : ""}
        className={`flex-shrink-0 w-5 h-5 ${
          currentPage === urlCheck ? "text-white" : "text-neutral-500"
        } transition duration-75 group-hover:text-white`}
      />

      <span
        className={`flex-1 ${isDrawer ? "ml-2" : "ml-3"} whitespace-nowrap`}
      >
        {title}
      </span>
    </Link>
  );
};
