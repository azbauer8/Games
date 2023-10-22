import { useState } from "react";
import Home from "./Home";
import Sidebar from "./Sidebar";

function App() {
    const [page, setPage] = useState("home");
    return (
        <>
            <Sidebar page={page} setPage={setPage} />
            {page === "home" ? (
                <Home />
            ) : page === "last30Days" ? null : page ===
              "thisPastWeek" ? null : page === "nextWeek" ? null : page ===
              "releaseCalendar" ? null : page ===
              "bestOfThisYear" ? null : page ===
              "bestOfLastYear" ? null : page === "allTimeTop250" ? null : null}
        </>
    );
}

export default App;
