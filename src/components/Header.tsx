import { useState } from "react";

import { FaGithub, FaHandPeace } from "react-icons/fa6";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import { itemsArray } from "./SidebarItemsList";
import SidebarItem from "./SidebarItem";

const Header = ({ page, setPage }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <nav className="flex items-center rounded-lg justify-between w-full py-2.5 px-6 pl-4 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-100">
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
                <SheetTrigger asChild>
                    <button className="p-2 mt-2 text-sm text-neutral-400 hover:text-white rounded-lg">
                        <span className="sr-only">Open sidebar</span>
                        <svg
                            className="w-8 h-8"
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
                </SheetTrigger>
                <SheetContent
                    side="left"
                    className="w-56 py-4 px-1 border-neutral-700"
                >
                    <SheetHeader>
                        <SheetDescription>
                            <div className="pl-2 space-y-2 font-medium">
                                {itemsArray.map((item) => (
                                    <SidebarItem
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        {...(item.icon && { icon: item.icon })}
                                        {...(item.isHeader && {
                                            isHeader: item.isHeader,
                                        })}
                                        {...(item.isLink && {
                                            isLink: item.isLink,
                                        })}
                                        {...(item.isLink && {
                                            setPage: setPage,
                                        })}
                                        {...(item.isLink &&
                                            page.id === item.id && {
                                                isSelected: true,
                                            })}
                                        isDialogItem={true}
                                        setSidebarOpen={setSidebarOpen}
                                    />
                                ))}
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            <div className="flex flex-row space-x-8 pt-1">
                <a href="https://zachbauer.me">
                    <FaHandPeace className="h-8 w-8 text-neutral-400 hover:text-white rounded-lg" />
                </a>
                <a href="https://github.com/azbauer8/Games">
                    <FaGithub className="h-8 w-8 text-neutral-400 hover:text-white rounded-lg" />
                </a>
            </div>
        </nav>
    );
};

export default Header;
