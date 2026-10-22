import { Outlet, ScrollRestoration } from "react-router";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import DiscountComponent from "../components/common/DiscountComponent";
import { useWelcomeMessage } from "../hooks/useRegister";

function MainLayout() {
  useWelcomeMessage();
  return (
    <div className="flex flex-col min-h-screen bg-(--bg-main)">
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center w-full px-4 pointer-events-none">
        <div className="w-full flex justify-center pointer-events-auto">
          <ScrollRestoration />
          <NavBar />
        </div>
      </header>

      <main className="flex-1 pt-24 bg-(--bg-main)">
        <Outlet />
      </main>
      <DiscountComponent />
      <footer className="bg-(--bg-footer) text-(--text-footer)">
        <Footer />
      </footer>
    </div>
  );
}
export default MainLayout;
