import { useState, useEffect } from "react";
import { FaGithub, FaHandPeace } from "react-icons/fa6";
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
    // change page title on page change
    useEffect(() => {
        document.title = page.title;
    }, [page]);
    return (
        <>
            <div className="absolute right-5 top-4 flex space-x-6">
                <a href="https://zachbauer.me">
                    <FaHandPeace className="h-7 w-7 sm:h-8 sm:w-8" />
                </a>
                <a href="https://github.com/azbauer8/Games">
                    <FaGithub className="h-7 w-7 sm:h-8 sm:w-8" />
                </a>
            </div>
            <Sidebar page={page} setPage={setPage} />
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
        </>
    );
}

export default App;
