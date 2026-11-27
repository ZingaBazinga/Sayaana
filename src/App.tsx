import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import PortfolioPage from "./pages/PortfolioPage";
import WarmupsPage from "./pages/WarmupsPage";
import "./App.css";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="recipes" element={<RecipesPage />} />
                    <Route path="portfolio" element={<PortfolioPage />} />
                    <Route path="warmups" element={<WarmupsPage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
