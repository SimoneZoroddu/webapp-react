import { Outlet } from "react-router-dom";
import AppHeader from "../components/DefaultLayout/AppHeader";
import AppFooter from "../components/DefaultLayout/AppFooter";
import { GlobalContextUse } from "../context/GlobalContext";
import Loader from "../components/Loader";

export default function DefaultLayout() {


    const { loading } = GlobalContextUse()


    return (
        <>
            <AppHeader />
            { loading && <Loader/>}
            <Outlet />
            <AppFooter />
        </>

    )
}