import {
    FaStar,
    FaFire,
    FaForward,
    FaRegCalendar,
    FaTrophy,
    FaCrown,
    FaHouseChimney,
} from "react-icons/fa6";
import { IoPodium } from "react-icons/io5";

interface SidebarItemProps {
    id: string;
    title: string;
    setPage?: (page: { id: string; title: string }) => void;
    icon?: string;
    isHeader?: boolean;
    isLink?: boolean;
    isSelected?: boolean;
    isDialogItem?: boolean;
    setSidebarOpen?: (sidebarOpen: boolean) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    id,
    title,
    setPage,
    icon,
    isHeader,
    isLink,
    isSelected,
    isDialogItem,
    setSidebarOpen,
}) => {
    const handleClick = () => {
        if (setPage) {
            if (isDialogItem && setSidebarOpen) {
                setSidebarOpen(false);
            }
            setPage({ id: id, title: title });
        }
    };

    if (isHeader && isLink) {
        return (
            <div>
                <a
                    href="#"
                    className="flex items-center p-2 text-white rounded-lg hover:text-neutral-500 group"
                    onClick={handleClick}
                >
                    <span className="text-3xl font-bold">{title}</span>
                </a>
            </div>
        );
    } else if (isHeader) {
        return (
            <div>
                <span className="flex items-center p-2 text-xl text-white rounded-lg group">
                    {title}
                </span>
            </div>
        );
    } else if (isLink) {
        return (
            <div>
                <a
                    href="#"
                    className="flex items-center p-2 text-white rounded-lg group"
                    onClick={handleClick}
                >
                    {icon === "FaHouseChimney" ? (
                        <FaHouseChimney
                            className={`flex-shrink-0 w-5 h-5 ${
                                isSelected ? "text-white" : "text-neutral-500"
                            } transition duration-75 group-hover:text-white`}
                        />
                    ) : icon === "FaStar" ? (
                        <FaStar
                            className={`flex-shrink-0 w-5 h-5 ${
                                isSelected ? "text-white" : "text-neutral-500"
                            } transition duration-75 group-hover:text-white`}
                        />
                    ) : icon === "FaFire" ? (
                        <FaFire
                            className={`flex-shrink-0 w-5 h-5 ${
                                isSelected ? "text-white" : "text-neutral-500"
                            } transition duration-75 group-hover:text-white`}
                        />
                    ) : icon === "FaForward" ? (
                        <FaForward
                            className={`flex-shrink-0 w-5 h-5 ${
                                isSelected ? "text-white" : "text-neutral-500"
                            } transition duration-75 group-hover:text-white`}
                        />
                    ) : icon === "FaRegCalendar" ? (
                        <FaRegCalendar
                            className={`flex-shrink-0 w-5 h-5 ${
                                isSelected ? "text-white" : "text-neutral-500"
                            } transition duration-75 group-hover:text-white`}
                        />
                    ) : icon === "FaTrophy" ? (
                        <FaTrophy
                            className={`flex-shrink-0 w-5 h-5 ${
                                isSelected ? "text-white" : "text-neutral-500"
                            } transition duration-75 group-hover:text-white`}
                        />
                    ) : icon === "IoPodium" ? (
                        <IoPodium
                            className={`flex-shrink-0 w-5 h-5 ${
                                isSelected ? "text-white" : "text-neutral-500"
                            } transition duration-75 group-hover:text-white`}
                        />
                    ) : icon === "FaCrown" ? (
                        <FaCrown
                            className={`flex-shrink-0 w-5 h-5 ${
                                isSelected ? "text-white" : "text-neutral-500"
                            } transition duration-75 group-hover:text-white`}
                        />
                    ) : null}
                    <span className="flex-1 ml-3 whitespace-nowrap">
                        {title}
                    </span>
                </a>
            </div>
        );
    } else {
        return null;
    }
};

export default SidebarItem;
