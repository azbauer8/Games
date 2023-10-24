import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PageLayout from "./components/PageLayout";

function App() {
    const [page, setPage] = useState({ id: "topPicks", title: "Top Picks" });
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
                    <main className="px-3 md:pl-0 py-2 md:py-7">
                        <PageLayout page={page} />
                    </main>
                </div>
            </div>
        </div>
    );
}

export default App;
