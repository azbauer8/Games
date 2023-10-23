import { useState, useEffect } from "react";
import Header from "./components/Header.tsx";
import Home from "./pages/Home";
import Last30Days from "./pages/Last30Days";
import ThisPastWeek from "./pages/ThisPastWeek";
import NextWeek from "./pages/NextWeek";
import ReleaseCalendar from "./pages/ReleaseCalendar";
import BestOfThisYear from "./pages/BestOfThisYear";
import BestOfLastYear from "./pages/BestOfLastYear";
import AllTimeBest from "./pages/AllTimeBest";

import Sidebar from "./components/Sidebar";

function App() {
    const [page, setPage] = useState({ id: "home", title: "Games Catalog" });
    useEffect(() => {
        document.title = page.title;
    }, [page]);
    return (
        <div className="min-h-screen flex flex-col h-screen overflow-hidden bg-neutral-900 text-white">
            <div className="flex-1 flex flex-row overflow-hidden">
                <nav className="order-first p-3 w-56 hidden md:block">
                    <Sidebar page={page} setPage={setPage} />
                </nav>
                <div className="flex-1 flex-col overflow-y-auto">
                    <nav className="md:hidden sticky top-0 z-50">
                        <Header page={page} setPage={setPage} />
                    </nav>
                    <main className="px-6 md:pl-0 py-2 md:py-7">
                        {page.id === "home" ? (
                            <Home />
                        ) : page.id === "last30Days" ? (
                            <Last30Days />
                        ) : page.id === "thisPastWeek" ? (
                            <ThisPastWeek />
                        ) : page.id === "nextWeek" ? (
                            <NextWeek />
                        ) : page.id === "releaseCalendar" ? (
                            <ReleaseCalendar />
                        ) : page.id === "bestOfThisYear" ? (
                            <BestOfThisYear />
                        ) : page.id === "bestOfLastYear" ? (
                            <BestOfLastYear />
                        ) : page.id === "allTimeBest" ? (
                            <AllTimeBest />
                        ) : null}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default App;
