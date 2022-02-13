import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link ,Outlet } from "react-router-dom";
import Helmet from "react-helmet";
import AdminTopNav from "./AdminTopNav";
import AdminSidebar from "./AdminSidebar";

const PrivateLayout = ({ children , location }) => {
    const user = useSelector((state) => state.user);

console.log("private");
    return (
        <div id="wrapper">
            <Helmet>
                <title>تاپلرن | داشبورد</title>
            </Helmet>
            
            <nav
                className="navbar navbar-inverse navbar-fixed-top m-0"
                role="navigation"
            >
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/dashboard">
                        داشبورد تاپلرن
                    </Link>
                </div>
                <AdminTopNav user={user} />
                <AdminSidebar location={location} />
            </nav>
            <div id="page-wrapper" className="mr-5"> <Outlet/></div>
        </div>
    );
};

export default PrivateLayout;
