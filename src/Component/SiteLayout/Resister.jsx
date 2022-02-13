import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { context } from '../ContextApi/context';

export default function Resister() {

    const RegisterContext = useContext(context);

    const { validator, setPassword, password, setEmail, email, setFullname, fullname, setPolicy, handleSubmit, policy } = RegisterContext;

    return (
        <main className="client-page">
            <Helmet>
                <meta charSet="utf-8" />
                <title>تاپلرن | ساخت حساب کاربری</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="container-content">

                <header><h2> عضویت در سایت </h2></header>
                <div className="form-layer">
                    <form action="" method="" onSubmit={e => handleSubmit(e)}>

                        <div className="input-group">
                            <span className="input-group-addon" id="username"><i className="zmdi zmdi-account"></i></span>
                            <input type="text" className="form-control" placeholder="نام و نام خانوادگی" name="fullname" aria-describedby="username" value={fullname} onChange={e => { setFullname(e.target.value); validator.current.showMessageFor("fullname") }} />
                        </div>
                        {validator.current.message("fullname", fullname, "required|min:5")}

                        <div className="input-group">
                            <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                            <input type="text" className="form-control" placeholder="ایمیل" name='email' aria-describedby="email-address" value={email} onChange={e => { setEmail(e.target.value); validator.current.showMessageFor('email') }} />
                        </div>
                        {validator.current.message("email", email, "required|email")}
                        <div className="input-group">
                            <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                            <input type="text" className="form-control" placeholder="رمز عبور " name='password' aria-describedby="password" value={password} onChange={e => { setPassword(e.target.value); validator.current.showMessageFor('password') }} />
                        </div>
                        {validator.current.message("password", password, "required|min:5")}
                        <div className="accept-rules">
                            <label><input type="checkbox" name="policy" onChange={e => setPolicy(e.currentTarget.checked)} />  قوانین و مقررات سایت را میپذیرم </label>
                        </div>
                        {validator.current.message('policy', policy, 'required')}
                        <div className="link">
                            <a href=""> <i className="zmdi zmdi-assignment"></i> قوانین و مقررات سایت !</a>
                            <Link to="/Login"> <i className="zmdi zmdi-account"></i> ورود به سایت </Link>
                        </div>

                        <button className="btn btn-success" onClick={e => handleSubmit(e)}> عضویت در سایت </button>

                    </form>
                </div>

            </div>
        </main>
    )
}
