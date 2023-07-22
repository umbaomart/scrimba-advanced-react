import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import "./App.scss";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <header>
                <Link className="site-logo" to="/">#VanLife</Link>
                <nav>
                    <Link to="/about">About</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<Vans />} />
            </Routes>
        </BrowserRouter>
    )
}