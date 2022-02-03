import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AdminSidebar = ({  }) => {
    var location;
    useEffect(() => {
        location=window.location.pathname
        console.log("fdsf");
    }, [window.location.pathname]);
    
   
    return (
        <div>
            <ul className="nav navbar-nav side-nav" style={{ height: "100vh" }}>
                <li
                   
                    className={location === "/dashboard" ? "active" : ""}
                >
                    <Link to="/dashboard">
                        <i className="fa fa-fw fa-dashboard"></i> داشبورد
                    </Link>
                </li>

                <li
                    className={location === "/dashboard/courses"? "active": ""}
                >
                    <Link to="/dashboard/courses">
                        <i className="fa fa-fw fa-graduation-cap"></i> دوره ها
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminSidebar;
