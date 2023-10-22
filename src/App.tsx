import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Last30Days from "./pages/Last30Days";
import ThisPastWeek from "./pages/ThisPastWeek";
import NextWeek from "./pages/NextWeek";
import ReleaseCalendar from "./pages/ReleaseCalendar";
import BestOfThisYear from "./pages/BestOfThisYear";
import BestOfLastYear from "./pages/BestOfLastYear";
import AllTimeTop250 from "./pages/AllTimeTop250";

import Sidebar from "./components/Sidebar";

function App() {
    const [page, setPage] = useState({ id: "home", title: "Games Catalog" });
    // change page title on page change
    useEffect(() => {
        document.title = page.title;
    }, [page]);
    return (
        <>
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
            ) : page.id === "allTimeTop250" ? (
                <AllTimeTop250 />
            ) : null}
        </>
    );
}

export default App;
