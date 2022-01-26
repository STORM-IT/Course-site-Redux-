import React, { useEffect } from "react";
import { withRouter, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "../../actions/user";
import { replace } from "lodash";

const Logout = ({ history }) => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    useEffect(() => {
        localStorage.removeItem("token");
        dispatch(clearUser());
        navigate("/",{replace:false})
    }, []);

    return null;
};

export default withRouter(Logout);