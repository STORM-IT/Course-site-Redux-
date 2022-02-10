import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SimpleReactValidator from 'simple-react-validator';
import { setUser } from '../Redux/Action/Use';
import { loginUser, registerUser } from '../services/userServices';
import { decodeToken } from '../utils/decodeToken';
import { context } from './context';
import { toastify } from '../utils/toastOption'
import Progress from "react-progress-2";

export default function UserContext({ children }) {
    
    const [showCanvasCreate, setShowCanvasCreate] = useState(false);
    const [showCanvasUpdate, setShowCanvasUpdate] = useState(false);
    const [courseUpdate, setCourseUpdate] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("")
    const [policy, setPolicy] = useState();
    const [email, setEmail] = useState("");
    const [, forceUpdate] = useState();
    const navigate = useNavigate();

    const Reset = () => {
        setFullname("");
        setEmail("");
        setPassword("");

    }
    const dispatch = useDispatch()
    const style_validator = {
        backgroundColor: "gray", borderRadius: '5px', color: 'white', padding: '3px 10px'
    }
    const validator = useRef(new SimpleReactValidator({

        messages: {
            email: "لطفا ایمیل معتبر وارد کنید",
            min: "حروف وارد شده نباید کمتر از 5 حرف باشد",
            required: "لطفا فیلد را پرکنید"
        },
        element: message => <div style={style_validator}>{message}</div>
    }));
    const handleLogin = async event => {
        console.log("start handle login");
        event.preventDefault();
        const user = {
            email, password
        }

        try {
            if (validator.current.allValid()) {

         
                Progress.show()
                const { status, data, token } = await loginUser(user);
                if (status === 200) {
                    toastify("SUCCESS", 'login seccess')

                    localStorage.setItem('token', data.token);
                    dispatch(setUser(decodeToken(data.token).user))
                    
                    navigate('/')
                    // navigate('/', { replace: true })
                    Progress.hide()
                    Reset()
                }
            } else {
                validator.current.showMessages();
                forceUpdate(1);
                Progress.hide()
            }




        } catch {
            console.log("login filed");
            toastify("ERROR", "Login Filed")
        }

    }




    const handleSubmit = async event => {
        event.preventDefault();
        const user = {
            fullname,
            email,
            password
        };

        try {
            debugger
            if (validator.current.allValid()) {

                Progress.show()
                const { status, token } = await registerUser(user);
                if (status === 201) {
                    console.log("created");
                    toastify("SUCCESS", "user created with the success 🤞")
                    localStorage.setItem("token", token)
                    // navigate("/about/Login");
                    navigate("/about/Login", { replace: true });
                    Progress.hide()
                    Reset();
                }
            } else {
                validator.current.showMessages();
                forceUpdate(1);
            }
        } catch (ex) {
            toastify("ERROR", "Sorry, something went wrong 😐")
            console.log(ex);
            Progress.hide()
        }
    };
    
    const setPagination = (current) => {
        setCurrentPage(current);
      }

    return (
        <context.Provider value={{
            fullname,
            setFullname,
            email,
            setEmail,
            password,
            setPassword,
            policy,
            setPolicy,
            showCanvasCreate,
            setShowCanvasCreate,
            showCanvasUpdate,
            setShowCanvasUpdate,
            courseUpdate,
            setCourseUpdate,
            currentPage,
            setPagination,
            validator,
            handleLogin,
            handleSubmit
        }}>
            {children}
        </context.Provider>
    )
}
