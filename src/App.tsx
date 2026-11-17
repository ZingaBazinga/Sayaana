import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import PortfolioPage from "./pages/PortfolioPage";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="recipes" element={<RecipesPage />} />
                    <Route path="portfolio" element={<PortfolioPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
