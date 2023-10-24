import { FaGithub, FaHandPeace } from "react-icons/fa6";
import SidebarItem from "./SidebarItem";
import { itemsArray } from "./SidebarItemsList";

interface SidebarProps {
    page: { id: string; title: string };
    setPage: (page: { id: string; title: string }) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ page, setPage }) => {
    return (
        <>
            <div className="flex flex-col justify-between h-full bg-neutral-900">
                <div className="px-1 py-4 pt-16">
                    <ul className="space-y-2 font-medium">
                        {itemsArray.map((item) => (
                            <SidebarItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                {...(item.icon && { icon: item.icon })}
                                {...(item.isHeader && {
                                    isHeader: item.isHeader,
                                })}
                                {...(item.isLink && { isLink: item.isLink })}
                                {...(item.isLink && { setPage: setPage })}
                                {...(item.isLink &&
                                    page.id === item.id && {
                                        isSelected: true,
                                    })}
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
        </>
    );
};

export default Sidebar;
