import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "../../Redux/Action/Use";

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.removeItem("token");
        dispatch(clearUser());
        navigate("/", { replace: false })
    }, []);

    return null;
};

export default Logout;