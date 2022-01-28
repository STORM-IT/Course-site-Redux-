import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import SimpleReactValidator from 'simple-react-validator';
import { setUser } from '../Redux/Action/Use';
import { loginUser, registerUser } from '../services/userServices';
import { decodeToken } from '../utils/decodeToken';
import { context } from './context';

export default function UserContext({children}) {
    debugger
    const [fullname, setFullname] = useState("d");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [policy,setPolicy]=useState();
    const [,forceUpdate]=useState();
    const navigate=useNavigate();
    const Reset = () => {
        setFullname("");
        setEmail("");
        setPassword("");

    }
    const dispatch = useDispatch()
    // const dispatch = useDispatch({children})
    const style_validator={
        backgroundColor:"gray",borderRadius:'5px',color:'white',padding:'3px 10px'
    }
    const validator = useRef(new SimpleReactValidator({
        
        messages:{
            email:"لطفا ایمیل معتبر وارد کنید",
            min:"حروف وارد شده نباید کمتر از 5 حرف باشد",
            required:"لطفا فیلد را پرکنید"
        },
        element:message=><div style={style_validator}>{message}</div>
    }));
    const handleLogin = async event => {
        console.log("start handle login");
        event.preventDefault();
        const user = {
            email, password
        }

        try {
            if (validator.current.allValid()) {
                

                const { status, data , token } = await loginUser(user);
                if (status === 200) {
                    toast.success('login seccess', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                console.log(data.token);
                localStorage.setItem('token', data.token);
                dispatch(setUser(decodeToken(data.token).user))
                // history.replace('/');
                
                navigate('/')
                // navigate('/', { replace: true })
                console.log("login success");
            }else{
                validator.current.showMessages();
                forceUpdate(1);
            }




        } catch {
            console.log("login filed");
            toast.error('login filed', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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
            if (validator.current.allValid()) {


                const { status , token } = await registerUser(user);
                if (status === 201) {
                    console.log("created");
                    toast.success('user created with the success 🤞', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    Reset();
                    localStorage.setItem("token",token)
                    // navigate("/about/Login");
                    navigate("/about/Login",{replace:true});
                    

                } 
            }else {
                    validator.current.showMessages();
                    forceUpdate(1);
                }
        } catch (ex) {
            toast.error("Sorry, something went wrong 😐", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.log(ex);
        }
    };


  return (
    <context.Provider value={
        email=email,
        setEmail=setEmail,
        password=password,
        setPassword=setPassword,
        validator=validator,
        handleLogin=handleLogin
    }>
      {children}
    </context.Provider>
  )
}
// import React, { useState, useRef } from "react";
// import SimpleReactValidator from "simple-react-validator";
// import { useDispatch } from "react-redux";
// import { context } from "./context";
// import { successMessage, errorMessage } from "./../../utils/message";
// import { loginUser, registerUser } from "../../services/userService";
// import { decodeToken } from "./../../utils/decodeToken";
// import { addUser } from "./../../actions/user";
// import { useNavigate } from "react-router";

// const UserContext = ({ children, history }) => {
//     const [fullname, setFullname] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [policy, setPolicy] = useState();

//     const [, forceUpdate] = useState();

//     const dispatch = useDispatch();

//     const navigate=useNavigate();
//     const validator = useRef(
//         new SimpleReactValidator({
//             messages: {
//                 required: "پر کردن این فیلد الزامی میباشد",
//                 min: "کمتر از 5 کاراکتر نباید باشد",
//                 email: "ایمیل نوشته شده صحیح نمی باشد"
//             },
//             element: message => <div style={{ color: "red" }}>{message}</div>
//         })
//     );

//     const resetStates = () => {
//         setFullname("");
//         setEmail("");
//         setPassword("");
//         setPolicy();
//     };

//     const handleLogin = async event => {
//         event.preventDefault();
//         const user = { email, password };

//         try {
//             if (validator.current.allValid()) {
//                 const { status, data } = await loginUser(user);
//                 if (status === 200) {
//                     successMessage("ورود موفقیت آمیز بود.");
//                     localStorage.setItem("token", data.token);
//                     dispatch(addUser(decodeToken(data.token).payload.user));
//                     navigate("/",{replace:true});
//                     resetStates();
//                 }
//             } else {
//                 validator.current.showMessages();

//                 forceUpdate(1);
//             }
//         } catch (ex) {
//             console.log(ex);
//             errorMessage("مشکلی پیش آمده.");
//         }
//     };

//     const handleRegister = async event => {
//         event.preventDefault();
//         const user = {
//             fullname,
//             email,
//             password
//         };

//         try {
//             if (validator.current.allValid()) {
//                 const { status } = await registerUser(user);
//                 if (status === 201) {
//                     successMessage("کاربر با موفقیت ساخته شد.");
//                     navigate("/about/Login");
//                 }
//             } else {
//                 validator.current.showMessages();
//                 forceUpdate(1);
//             }
//         } catch (ex) {
//             errorMessage("مشکلی در ثبت نام پیش آمده.");
//             console.log(ex);
//         }
//     };

//     return (
//         <context.Provider
//             value={{
//                 fullname,
//                 setFullname,
//                 email,
//                 setEmail,
//                 password,
//                 setPassword,
//                 policy,
//                 setPolicy,
//                 validator,
//                 handleLogin,
//                 handleRegister
//             }}
//         >
//             {children}
//         </context.Provider>
//     );
// };

// export default UserContext;

