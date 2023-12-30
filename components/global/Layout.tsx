import Sidebar from "@/components/global/sidebar/Sidebar";
import Nav from "@/components/global/Nav";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row mx-auto max-w-[115rem] relative">
      <Nav />
      <Sidebar />
      <main className=" p-5 pt-8 md:pt-12 flex-auto">{children}</main>
    </div>
  );
}
export default Layout;
