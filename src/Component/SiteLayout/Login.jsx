import React, {useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../services/userServices'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import SimpleReactValidator from 'simple-react-validator';
import { Helmet } from 'react-helmet';

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const[loading,setloading]=useState(false);
    // console.log(useNavigate)
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
    const [,forceUpdate]=useState();

    const Reset = () => {
        setEmail("");
        setPassword("");
    }
    const navigate = useNavigate();
    const handleLogin = async event => {
        event.preventDefault();
        const user = {
            email, password
        }

        try {
            if (validator.current.allValid()) {
                
                setloading(true)
                const { status, data } = await loginUser(user);
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
                // history.replace('/');
    
                navigate('/', { replace: true })
                setloading(false)
            }else{
                validator.current.showMessages();
                forceUpdate(1);
            }




        } catch {
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
    return (
        <main class="client-page">
            <Helmet>
            <meta charSet="utf-8" />
                <title>تاپلرن | ورود به سایت</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div class="container-content">
            {/* {loading?(<Sugar />):null} */}
          
                <header><h2> ورود به سایت </h2></header>

                <div class="form-layer">

                    <form action="" method="" onSubmit={handleLogin}>

                        <div class="input-group">
                            <span class="input-group-addon" id="email-address"><i class="zmdi zmdi-email"></i></span>
                            <input type="text" class="form-control" name='email' placeholder="ایمیل" aria-describedby="email-address" 
                            onChange={event => {setEmail(event.target.value); validator.current.showMessageFor('email')} } />
                        </div>
                        {validator.current.message('email',email,'required|email')}
                        <div class="input-group">
                            <span class="input-group-addon" id="password"><i class="zmdi zmdi-lock"></i></span>
                            <input type="text" class="form-control" name='password' placeholder="رمز عبور " aria-describedby="password"
                                onChange={event => {setPassword(event.target.value);validator.current.showMessageFor('password')}} />
                        </div>
                        {validator.current.message('password',password,'required|min:5')}
                        <div class="remember-me">
                            <label><input type="checkbox" name="" />  مرا بخاطر بسپار </label>
                        </div>

                        <div class="link">
                            <a href=""> <i class="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده ام !</a>
                            <Link to="/about/Register"> <i class="zmdi zmdi-account"></i> عضویت در سایت </Link>
                        </div>

                        <button class="btn btn-success" onClick={handleLogin}> ورود به سایت </button>

                    </form>
                </div>

            </div>
            
        </main>
    )
}
