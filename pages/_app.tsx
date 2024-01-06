import "@/styles/global.css";
<<<<<<< HEAD
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
=======
>>>>>>> parent of 4d56bd8 (added prettier import and tailwind sorting)
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MenuButton from "@/components/Sidebar/MenuButton";
import Sidebar from "@/components/Sidebar";

function App({ Component, pageProps }: AppProps) {
<<<<<<< HEAD
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
					<Analytics />
					<SpeedInsights />
				</main>
			</div>
		</QueryClientProvider>
	);
=======
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
>>>>>>> parent of 4d56bd8 (added prettier import and tailwind sorting)
}
export default App;
