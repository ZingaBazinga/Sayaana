import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import BurgerMenu from "./BurgerMenu";

export default function Layout() {
    return (
        <div className="layout">
            <header className="layout-header">
                <h1 className="site-title">Литературная кухня</h1>
                <BurgerMenu />
            </header>

            <div className="layout-body">
                <Sidebar />
                <main className="layout-main">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
