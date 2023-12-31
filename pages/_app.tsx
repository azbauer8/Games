import "@/styles/global.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MenuButton from "@/components/Sidebar/MenuButton";
import Sidebar from "@/components/Sidebar";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col md:flex-row mx-auto max-w-[115rem] relative">
        <MenuButton />
        <Sidebar />
        <main className=" p-5 pt-8 md:pt-12 flex-auto">
          <Component {...pageProps} />
        </main>
      </div>
    </QueryClientProvider>
  );
}
export default App;
