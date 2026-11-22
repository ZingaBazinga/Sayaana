import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
    const location = useLocation();

    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <Link
                    to="/"
                    className={`sidebar-link ${location.pathname === "/" ? "active" : ""}`}
                >
                    Главная
                </Link>
                <Link
                    to="/portfolio"
                    className={`sidebar-link ${location.pathname === "/portfolio" ? "active" : ""}`}
                >
                    Портфолио
                </Link>
            </nav>
        </aside>
    );
}
