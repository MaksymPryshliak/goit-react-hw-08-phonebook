import { Bars } from "components/Bars/Bars";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <Bars/>
            <Outlet/>
        </div>
    )
}