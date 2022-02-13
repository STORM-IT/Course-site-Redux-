import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import _ from 'lodash'
import { useDispatch } from 'react-redux'
import { clearUser } from '../Redux/Action/Use'

export default function Head_Home() {

    const User = useSelector(state => state.user)

    const dispatch = useDispatch()

    return (
        <div className="landing-layer">
            <div className="container">
                <nav>
                    <div className="row">
                        <div className="col-sm-6 col-xs-12">
                            <ul>
                                <li>
                                    <a href=""> همکاری در فروش </a>
                                    <a href=""> درباره ما </a>
                                    <a href=""> تماس با ما </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                            <div className="clientarea">
                                {_.isEmpty(User) ? (

                                    <div className="signin ">
                                        <i className="zmdi zmdi-account"></i>
                                        <Link to="/Login"> ورود </Link> /
                                        <Link to="/Register"> عضویت </Link>
                                    </div>
                                ) : (

                                    <div className="loggein">
                                        <i className="zmdi zmdi-account"></i>
                                        <Link to="/Acount_Info">{User.fullname}</Link> {" / "}
                                        {!User.isAdmin ? (

                                            <Link to="/dashboard"> داشبورد  {" / "}</Link>

                                        ) : (null)}

                                        <Link to="/Logout" onClick={() => dispatch(clearUser())}>خروج از حساب کاربری</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
                <header>
                    <Link to="/" className="logo">
                        <img src="./images/logo.png" />
                    </Link>
                    <h1> با اساتید مجرب و کارآزموده در خودآموز تاپ لرن </h1>
                    <h2>
                        {" "}
                        آموزش ببینید ، تجربه کسب کنید و بازار کار شوید{" "}
                    </h2>
                    <h3> با کمترین هزینه خودت یاد بگیر </h3>
                </header>
                <div className="search-form">
                    <form>
                        <input
                            type="text"
                            name=""
                            placeholder="چی دوست داری یاد بگیری ؟"
                        />
                        <button>
                            <i className="zmdi zmdi-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
