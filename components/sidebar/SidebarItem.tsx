import globalState from "@/lib/globalState";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

interface SidebarItemProps {
  title: string;
  icon?: string;
  isHeader?: boolean;
  isLink?: boolean;
  url?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  title,
  icon,
  isHeader,
  isLink,
  url,
}) => {
  const { setSidebarOpen } = globalState();
  const router = useRouter();
  const currentPage = router.query.page as string;
  url = url?.substring(1);

  if (isHeader && isLink) {
    return (
      <Link
        href={url ? url : "/TopPicks"}
        className="flex items-center p-2 text-white rounded-lg hover:text-neutral-500 group"
        onClick={() => setSidebarOpen(false)}
      >
        <span className="text-3xl font-bold">{title}</span>
      </Link>
    );
  } else if (isHeader) {
    return (
      <span className="flex items-center p-2 text-xl text-white rounded-lg group">
        {title}
      </span>
    );
  } else if (isLink) {
    return (
      <Link
        href={url ? url : "/TopPicks"}
        className="flex items-center p-2 text-white rounded-lg group"
        onClick={() => setSidebarOpen(false)}
      >
        <Icon
          icon={icon ? icon : ""}
          className={`flex-shrink-0 w-5 h-5 ${
            currentPage === url ? "text-white" : "text-neutral-500"
          } transition duration-75 group-hover:text-white`}
        />

        <span className="flex-1 ml-3 whitespace-nowrap">{title}</span>
      </Link>
    );
  } else {
    return null;
  }
};

export default SidebarItem;
