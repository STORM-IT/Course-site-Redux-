import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { context } from '../../ContextApi/context';

export default function Login() {


    const Context = useContext(context)
    const { email, setEmail, validator, password, setPassword, handleLogin } = Context

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


                    <form action="" method="" onSubmit={e => handleLogin(e)}>

                        <div className="input-group">
                            <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                            <input type="text" className="form-control" name='email' placeholder="ایمیل" aria-describedby="email-address"
                                onChange={event => { setEmail(event.target.value); validator.current.showMessageFor('email') }} />
                        </div>
                        {validator.current.message('email', email, 'required|email')}
                        <div className="input-group">
                            <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                            <input type="text" className="form-control" name='password' placeholder="رمز عبور " aria-describedby="password"
                                onChange={event => { setPassword(event.target.value); validator.current.showMessageFor('password') }} />
                        </div>
                        {validator.current.message('password', password, 'required|min:5')}
                        <div className="remember-me">
                            <label><input type="checkbox" name="" />  مرا بخاطر بسپار </label>
                        </div>

                        <div className="link">
                            <a href=""> <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده ام !</a>
                            <Link to="/Register"> <i className="zmdi zmdi-account"></i> عضویت در سایت </Link>
                        </div>

                        <button className="btn btn-success" onClick={e => handleLogin(e)}> ورود به سایت </button>

                    </form>
                </div>

            </div>

        </main>
    )
}
