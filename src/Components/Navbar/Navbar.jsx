import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="border-b border-zinc-800 bg-zinc-900 fixed top-0 left-0 right-0 z-10">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <h1 className="text-xl font-bold text-white">
                    React Project
                </h1>
                <div className="flex gap-6 items-center">
                    <Link to={"/"}>
                        Home
                    </Link>
                    <Link to={"/about"}>
                        About
                    </Link>
                </div>

            </div>
        </nav >
    );
}