import axios from 'axios';
import React, { useRef, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { registerUser } from '../services/userServices'
import SimpleReactValidator from 'simple-react-validator'
import { Helmet } from 'react-helmet';
// import { Sugar } from "react-preloaders";
// import {Cube} from 'react-preloaders'
export default function Resister() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [policy,setPolicy]=useState();
    const [loading, setLoading] = useState(false);
    
    const navigate=useNavigate();

    const [, forceUpdate] = useState();
    const Reset = () => {
        setFullname("");
        setEmail("");
        setPassword("");

    }
    // SimpleReactValidator.addLocale('klingon', {
    //     // accepted: 'Hab SoSlI’ Quch!',
    //     // email: 'Heghlu’meH QaQ jajvam'
    //     required: "لطفا فیلد را خالی نگذارید",
    //         // min: "not less than 5 character",
    //         email: "your email is not correct"
    //   });
    const validator = useRef(new SimpleReactValidator({
        messages: {
            required: "لطفا فیلد را خالی نگذارید",
            min: "not less than 5 character",
            email: "your email is not correct"
        },
        element: message => <div style={{ color: "red" }}>{message}</div>
    }))
    const handleSubmit = async event => {
        event.preventDefault();
        const user = {
            fullname,
            email,
            password
        };

        try {
            if (validator.current.allValid()) {


                const { status } = await registerUser(user);
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
                    navigate("/",{replace:true});
                    

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
        <main class="client-page">
            <Helmet>
            <meta charSet="utf-8" />
                <title>تاپلرن | ساخت حساب کاربری</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div class="container-content">

                <header><h2> عضویت در سایت </h2></header>
                {/* {loading ? (
                    <Sugar time={0} color="#fc03d7" customLoading={loading} />
                ) : null} */}
                <div>
                    {/* {<Cube/>} */}
                </div>
                <div class="form-layer">

                    <form action="" method="" onSubmit={handleSubmit}>

                        <div class="input-group">
                            <span class="input-group-addon" id="username"><i class="zmdi zmdi-account"></i></span>
                            <input type="text" class="form-control" placeholder="نام و نام خانوادگی" name="fullname" aria-describedby="username" value={fullname} onChange={e => { setFullname(e.target.value); validator.current.showMessageFor("fullname") }} />
                        </div>
                            {validator.current.message("fullname",fullname,"required|min:5")}

                        <div class="input-group">
                            <span class="input-group-addon" id="email-address"><i class="zmdi zmdi-email"></i></span>
                            <input type="text" class="form-control" placeholder="ایمیل" name='email' aria-describedby="email-address" value={email} onChange={e => {setEmail(e.target.value); validator.current.showMessageFor('email')}} />
                        </div>
                        {validator.current.message("email",email,"required|email")}
                        <div class="input-group">
                            <span class="input-group-addon" id="password"><i class="zmdi zmdi-lock"></i></span>
                            <input type="text" class="form-control" placeholder="رمز عبور " name='password' aria-describedby="password" value={password} onChange={e => {setPassword(e.target.value); validator.current.showMessageFor('password')}} />
                        </div>
                        {validator.current.message("password",password,"required|min:5")}
                        <div class="accept-rules">
                            <label><input type="checkbox" name="policy" onChange={e=>setPolicy(e.currentTarget.checked)}/>  قوانین و مقررات سایت را میپذیرم </label>
                        </div>
                        {validator.current.message('policy',policy,'required')}
                        <div class="link">
                            <a href=""> <i class="zmdi zmdi-assignment"></i> قوانین و مقررات سایت !</a>
                            <Link to="/about/Login"> <i class="zmdi zmdi-account"></i> ورود به سایت </Link>
                        </div>

                        <button class="btn btn-success" onClick={handleSubmit}> عضویت در سایت </button>

                    </form>
                </div>

            </div>
            {/* <ToastContainer/> */}
        </main>
    )
}
