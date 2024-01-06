import Sidebar from "@/components/Sidebar";
import MenuButton from "@/components/Sidebar/MenuButton";
import "@/styles/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative mx-auto flex max-w-[115rem] flex-col md:flex-row">
        <MenuButton />
        <Sidebar />
        <main className=" flex-auto p-5 pt-8 md:pt-12">
          <Component {...pageProps} />
        </main>
      </div>
    </QueryClientProvider>
  );
}
export default App;
