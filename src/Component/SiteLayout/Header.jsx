import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {isEmpty} from 'lodash'
import {clearUser} from '../Redux/Action/Use'

export default function Header() {
    const User=useSelector(state=>state.user)
    const dispatch=useDispatch()
    return (
        <Fragment>
        <div className="landing-layer">
            <div className="container">
                <nav>
                    <div className="row">
                        <div className="col-sm-6 col-xs-12">
                            <ul>
                                <li><Link to="/"> تاپ لرن </Link></li>
                                <li><a href=""> همکاری در فروش </a></li>
                                <li><a href=""> درباره ما </a> </li>
                                <li><a href=""> تماس با ما </a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                            <div className="clientarea">
                                {isEmpty(User)?(

                                <div className="signin hidden">
                                    <i className="zmdi zmdi-account"></i>
                                    <Link to="/Login"> ورود </Link> /
                                    <Link to="/Register"> عضویت </Link>
                                </div>
                                ):(

                                <div className="loggein ">
                                    <i className="zmdi zmdi-account"></i><Link to="/Acount_Info">{User.fullname}</Link>{" / "}
                                    <i className="zmdi zmdi-account"></i><Link to="/" onClick={()=>dispatch(clearUser())}>خروج از حساب کاربری</Link>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        

</Fragment>
    )
}
