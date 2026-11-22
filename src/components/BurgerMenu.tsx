import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <button
                className="burger-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Открыть меню"
            >
                <span className={`burger-line ${isOpen ? "open" : ""}`}></span>
                <span className={`burger-line ${isOpen ? "open" : ""}`}></span>
                <span className={`burger-line ${isOpen ? "open" : ""}`}></span>
            </button>

            {isOpen && (
                <div className="mobile-menu-overlay" onClick={closeMenu}>
                    <nav
                        className="mobile-menu"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Link
                            to="/"
                            className={`mobile-menu-link ${location.pathname === "/" ? "active" : ""}`}
                            onClick={closeMenu}
                        >
                            Главная
                        </Link>
                        <Link
                            to="/portfolio"
                            className={`mobile-menu-link ${location.pathname === "/portfolio" ? "active" : ""}`}
                            onClick={closeMenu}
                        >
                            Портфолио
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
}
