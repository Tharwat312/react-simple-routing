import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

export default function Layout() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-zinc-950 text-white pt-20">
                <div className="min-h-screen flex flex-col">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    )
}
