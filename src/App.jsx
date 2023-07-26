import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import HostIncome from "./pages/Host/HostIncome";
import HostReviews from "./pages/Host/HostReviews";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './server';

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/vans" element={<Vans />} />
                    <Route path="/vans/:id" element={<VanDetail />} />
                    <Route path="/host/" element={<Dashboard />} />
                    <Route path="/host/income" element={<HostIncome />} />
                    <Route path="/host/reviews" element={<HostReviews />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}