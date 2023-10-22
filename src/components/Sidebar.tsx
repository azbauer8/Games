import SidebarItem from "./SidebarItem";

interface SidebarProps {
    page: { id: string; title: string };
    setPage: (page: { id: string; title: string }) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ page, setPage }) => {
    const itemsArray = [
        { id: "home", title: "Home", isHeader: true, isLink: true },
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
            <button
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>
            <aside
                id="default-sidebar"
                className="fixed top-0 sm:top-9 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-neutral-900"
                aria-label="Sidebar"
            >
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
        </>
    );
};

export default Sidebar;
