import globalState from "@/lib/globalState";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

export const DrawerTitle = ({
  url,
  title,
}: {
  url?: string;
  title: string;
}) => {
  const { setSidebarOpen } = globalState();
  return (
    <Link
      href={url ? url : "/TopPicks"}
      className="flex items-center py-2 text-white rounded-lg hover:text-neutral-500 group"
      onClick={() => setSidebarOpen(false)}
    >
      <span className="text-4xl font-bold">{title}</span>
    </Link>
  );
};

export const DrawerHeader = ({ title }: { title: string }) => {
  return (
    <span className="flex items-center p-2 text-lg text-white rounded-lg group">
      {title}
    </span>
  );
};

export const DrawerLink = ({
  url,
  title,
  icon,
}: {
  url?: string;
  title: string;
  icon: string;
}) => {
  const { setSidebarOpen } = globalState();
  const router = useRouter();
  const currentPage = router.query.page as string;
  url = url?.substring(1);
  return (
    <Link
      href={url ? url : "/TopPicks"}
      className="flex items-center py-3 px-4 text-white rounded-lg group bg-neutral-800"
      onClick={() => setSidebarOpen(false)}
    >
      <Icon
        icon={icon ? icon : ""}
        className={`flex-shrink-0 w-5 h-5 ${
          currentPage === url ? "text-white" : "text-neutral-500"
        } transition duration-75 group-hover:text-white`}
      />

      <span className="flex-1 ml-2 whitespace-nowrap">{title}</span>
    </Link>
  );
};
