import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
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
                                <div className="loggein ">
                                    <i className="zmdi zmdi-account"></i><a href=""> ایمان مدائنی ، خوش آمدی </a>
                                </div>
                                <div className="signin hidden">
                                    <i className="zmdi zmdi-account"></i>
                                    <a href=""> ورود </a> /
                                    <a href=""> عضویت </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        

</Fragment>
    )
}
