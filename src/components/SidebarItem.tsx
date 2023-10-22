import {
    FaStar,
    FaFire,
    FaForward,
    FaRegCalendar,
    FaTrophy,
    FaCrown,
} from "react-icons/fa6";
import { IoPodium } from "react-icons/io5";

interface SidebarItem {
    isSelected?: boolean;
    header?: boolean;
    link?: string;
    icon?: string;
    title?: string;
    handleClick?: () => void;
}

function SidebarItem({
    isSelected = false,
    header = false,
    link = "",
    icon = "",
    title = "",
}) {
    if (header === true && link !== "") {
        return (
            <li>
                <a
                    href={link}
                    className="flex items-center p-2 text-white rounded-lg hover:text-neutral-500 group"
                >
                    <span className="text-3xl font-bold">{title}</span>
                </a>
            </li>
        );
    } else if (header === true) {
        return (
            <li>
                <span className="flex items-center p-2 text-xl text-white rounded-lg group">
                    {title}
                </span>
            </li>
        );
    } else {
        return (
            <li>
                <a
                    href={link}
                    className="flex items-center p-2 text-white rounded-lg group"
                    // onClick={handleClick}
                >
                    {icon === "star" ? (
                        <FaStar
                            className={`flex-shrink-0 w-5 h-5 ${
                                isSelected ? "text-white" : "text-neutral-500"
                            } transition duration-75 group-hover:text-white`}
                        />
                    ) : icon === "fire" ? (
                        <FaFire
                            className={`flex-shrink-0 w-5 h-5 ${
                                isSelected ? "text-white" : "text-neutral-500"
                            } transition duration-75 group-hover:text-white`}
                        />
                    ) : icon === "fast-forward" ? (
                        <FaForward
                            className={`flex-shrink-0 w-5 h-5 ${
                                isSelected ? "text-white" : "text-neutral-500"
                            } transition duration-75 group-hover:text-white`}
                        />
                    ) : icon === "calendar" ? (
                        <FaRegCalendar
                            className={`flex-shrink-0 w-5 h-5 ${
                                isSelected ? "text-white" : "text-neutral-500"
                            } transition duration-75 group-hover:text-white`}
                        />
                    ) : icon === "trophy" ? (
                        <FaTrophy
                            className={`flex-shrink-0 w-5 h-5 ${
                                isSelected ? "text-white" : "text-neutral-500"
                            } transition duration-75 group-hover:text-white`}
                        />
                    ) : icon === "podium" ? (
                        <IoPodium
                            className={`flex-shrink-0 w-5 h-5 ${
                                isSelected ? "text-white" : "text-neutral-500"
                            } transition duration-75 group-hover:text-white`}
                        />
                    ) : icon === "crown" ? (
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
            </li>
        );
    }
}

export default SidebarItem;
