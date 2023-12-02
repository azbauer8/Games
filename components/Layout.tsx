import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row">
      <Header />
      <Sidebar />
      <main className="sm:ml-56 p-5 pt-8 sm:pt-12 sm:pl-0">{children}</main>
    </div>
  );
}
export default Layout;
