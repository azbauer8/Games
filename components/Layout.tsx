import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row mx-auto max-w-[115rem]">
      <Header />
      <Sidebar />
      <main className=" p-5 pt-8 md:pt-12 flex-auto">{children}</main>
    </div>
  );
}
export default Layout;
