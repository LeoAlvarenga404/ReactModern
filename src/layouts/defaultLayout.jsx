import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export function DefaultLayout() {
    return (
        <div className="min-h-screen bg-zinc-900 flex">
            <Sidebar />
            <Outlet/>
        </div>
    )
}