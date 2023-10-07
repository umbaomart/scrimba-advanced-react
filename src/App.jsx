import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import HostIncome from "./pages/Host/HostIncome";
import HostReviews from "./pages/Host/HostReviews";
import "./App.scss";
import HostVans from "./pages/Host/HostVans";
import HostVansDetails from "./pages/Host/HostVansDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import NotFound from "./pages/NotFound"
import Login from "./pages/Login";

import './server';

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />

                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:id" element={<VanDetail />} />
                    <Route
                        path="login"
                        element={<Login />}
                    />

                    <Route path="host" element={<HostLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<HostIncome />} />
                        <Route path="reviews" element={<HostReviews />} />
                        <Route path="vans" element={<HostVans />} />
                        <Route path="vans/:id" element={<HostVansDetails />} >
                            <Route index element={<HostVanInfo />} />
                            <Route path="pricing" element={<HostVanPricing />} />
                            <Route path="photos" element={<HostVanPhotos />} />
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}