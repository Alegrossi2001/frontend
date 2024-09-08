import { Outlet } from "react-router";

export default function MainPage() {
    return (
        <div>
            <h1>Main Page</h1>
            <Outlet />
        </div>
    )
}
