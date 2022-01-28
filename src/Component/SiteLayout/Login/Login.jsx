import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { context } from '../../ContextApi/context';
import SimpleReactValidator from 'simple-react-validator';

export default function Login() {
   

   const Context =useContext(context)
   const {email,setEmail,password,validator,setPassword,handleLogin} =Context
   
    // console.log(useNavigate)

    
    // const validator = useRef(new SimpleReactValidator({
    //     messages:{
    //         email:"لطفا ایمیل معتبر وارد کنید",
    //         min:"حروف وارد شده نباید کمتر از 5 حرف باشد",
    //         required:"لطفا فیلد را پرکنید"
    //     },
    //     element:message=><div style={style_validator}>{message}</div>
    // }));
console.log(validator);
    
    return (
        <main className="client-page">
            <Helmet>
            <meta charSet="utf-8" />
                <title>تاپلرن | ورود به سایت</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="container-content">
            {/* {loading?(<Sugar />):null} */}
          
                <header><h2> ورود به سایت </h2></header>

                <div className="form-layer">

                    <form action="" method="" onSubmit={handleLogin}>

                        <div className="input-group">
                            <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                            <input type="text" className="form-control" name='email' placeholder="ایمیل" aria-describedby="email-address" 
                            onChange={event => {setEmail(event.target.value); validator.current.showMessageFor('email')} } />
                        </div>
                        {/* {validator.current.message('email',email,'required|email')} */}
                        <div className="input-group">
                            <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                            <input type="text" className="form-control" name='password' placeholder="رمز عبور " aria-describedby="password"
                                onChange={event => {setPassword(event.target.value);validator.current.showMessageFor('password')}} />
                        </div>
                        {/* {validator.current.message('password',password,'required|min:5')} */}
                        <div className="remember-me">
                            <label><input type="checkbox" name="" />  مرا بخاطر بسپار </label>
                        </div>

                        <div className="link">
                            <a href=""> <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده ام !</a>
                            <Link to="/about/Register"> <i className="zmdi zmdi-account"></i> عضویت در سایت </Link>
                        </div>

                        <button className="btn btn-success" onClick={handleLogin}> ورود به سایت </button>

                    </form>
                </div>

            </div>
            
        </main>
    )
}
