import SidebarItem from "./SidebarItem";
import TopbarItem from "./TopbarItem";

interface SidebarProps {
    page: { id: string; title: string };
    setPage: (page: { id: string; title: string }) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ page, setPage }) => {
    const itemsArray = [
        {
            id: "home",
            title: "Home",
            icon: "FaHouseChimney",
            isHeader: true,
            isLink: true,
        },
        { id: "newReleases", title: "New Releases", isHeader: true },
        {
            id: "last30Days",
            title: "Last 30 days",
            icon: "FaStar",
            isLink: true,
        },
        {
            id: "thisPastWeek",
            title: "This past week",
            icon: "FaFire",
            isLink: true,
        },
        { id: "nextWeek", title: "Next week", icon: "FaForward", isLink: true },
        {
            id: "releaseCalendar",
            title: "Release calendar",
            icon: "FaRegCalendar",
            isLink: true,
        },
        { id: "top", title: "Top", isHeader: true },
        {
            id: "bestOfThisYear",
            title: "Best of this year",
            icon: "FaTrophy",
            isLink: true,
        },
        {
            id: "bestOfLastYear",
            title: "Best of last year",
            icon: "IoPodium",
            isLink: true,
        },
        {
            id: "allTimeTop250",
            title: "All time top 250",
            icon: "FaCrown",
            isLink: true,
        },
    ];
    return (
        <>
            {/* left bar (desktop) */}
            <aside className="fixed top-0 sm:top-9 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-neutral-900">
                <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-900">
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
            </aside>
            {/* top bar (mobile) */}
            <aside className="fixed top-0 left-0 z-40 w-screen h-24 transition-transform sm:translate-x-full translate-x-0 bg-neutral-900">
                <div className="h-full overflow-y-auto bg-neutral-900">
                    <ul className="h-full flex flex-wrap space-x-7 items-center justify-center text-gray-900 dark:text-white">
                        {itemsArray.map((item) =>
                            item.icon ? (
                                <TopbarItem
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    icon={item.icon}
                                    setPage={setPage}
                                    {...(page.id === item.id && {
                                        isSelected: true,
                                    })}
                                />
                            ) : null
                        )}
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
