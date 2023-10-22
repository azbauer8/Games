import { useState, useEffect } from "react";
import Home from "./Home";
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
            ) : page.id === "last30Days" ? null : page.id ===
              "thisPastWeek" ? null : page.id ===
              "nextWeek" ? null : page.id ===
              "releaseCalendar" ? null : page.id ===
              "bestOfThisYear" ? null : page.id ===
              "bestOfLastYear" ? null : page.id ===
              "allTimeTop250" ? null : null}
        </>
    );
}

export default App;
