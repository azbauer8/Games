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

interface TopbarItemProps {
    id: string;
    title: string;
    icon?: string;
    setPage?: (page: { id: string; title: string }) => void;
    isSelected?: boolean;
}

const TopbarItem: React.FC<TopbarItemProps> = ({
    id,
    title,
    setPage,
    icon,
    isSelected,
}) => {
    const handleClick = () => {
        if (setPage) {
            setPage({ id: id, title: title });
        }
    };

    return (
        <li>
            <a
                href="#"
                className="flex items-center text-white rounded-lg group"
                onClick={handleClick}
            >
                {icon === "FaHouseChimney" ? (
                    <FaHouseChimney
                        className={`flex-shrink-0 w-7 h-7 ${
                            isSelected ? "text-white" : "text-neutral-500"
                        } transition duration-75 group-hover:text-white`}
                    />
                ) : icon === "FaStar" ? (
                    <FaStar
                        className={`flex-shrink-0 w-7 h-7 ${
                            isSelected ? "text-white" : "text-neutral-500"
                        } transition duration-75 group-hover:text-white`}
                    />
                ) : icon === "FaFire" ? (
                    <FaFire
                        className={`flex-shrink-0 w-7 h-7 ${
                            isSelected ? "text-white" : "text-neutral-500"
                        } transition duration-75 group-hover:text-white`}
                    />
                ) : icon === "FaForward" ? (
                    <FaForward
                        className={`flex-shrink-0 w-7 h-7 ${
                            isSelected ? "text-white" : "text-neutral-500"
                        } transition duration-75 group-hover:text-white`}
                    />
                ) : icon === "FaRegCalendar" ? (
                    <FaRegCalendar
                        className={`flex-shrink-0 w-7 h-7 ${
                            isSelected ? "text-white" : "text-neutral-500"
                        } transition duration-75 group-hover:text-white`}
                    />
                ) : icon === "FaTrophy" ? (
                    <FaTrophy
                        className={`flex-shrink-0 w-7 h-7 ${
                            isSelected ? "text-white" : "text-neutral-500"
                        } transition duration-75 group-hover:text-white`}
                    />
                ) : icon === "IoPodium" ? (
                    <IoPodium
                        className={`flex-shrink-0 w-7 h-7 ${
                            isSelected ? "text-white" : "text-neutral-500"
                        } transition duration-75 group-hover:text-white`}
                    />
                ) : icon === "FaCrown" ? (
                    <FaCrown
                        className={`flex-shrink-0 w-7 h-7 ${
                            isSelected ? "text-white" : "text-neutral-500"
                        } transition duration-75 group-hover:text-white`}
                    />
                ) : null}
            </a>
        </li>
    );
};

export default TopbarItem;
