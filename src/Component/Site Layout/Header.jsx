import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <Fragment>
        <div class="landing-layer">
            <div class="container">
                <nav>
                    <div class="row">
                        <div class="col-sm-6 col-xs-12">
                            <ul>
                                <li><Link to="/"> تاپ لرن </Link></li>
                                <li><a href=""> همکاری در فروش </a></li>
                                <li><a href=""> درباره ما </a> </li>
                                <li><a href=""> تماس با ما </a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-xs-12">
                            <div class="clientarea">
                                <div class="loggein ">
                                    <i class="zmdi zmdi-account"></i><a href=""> ایمان مدائنی ، خوش آمدی </a>
                                </div>
                                <div class="signin hidden">
                                    <i class="zmdi zmdi-account"></i>
                                    <a href=""> ورود </a> /
                                    <a href=""> عضویت </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div class="main-menu">
                <div class="container">
                    <nav>
                        <span class="responsive-sign"><i class="zmdi zmdi-menu"></i></span>
                        <ul>
                            <li><a href=""> برنامه نویسی موبایل </a>
                                <ul>
                                    <li><a href=""> زامارین  Xamarin </a></li>
                                    <li><a href=""> react Native </a></li>
                                </ul>
                            </li>
                            <li><a href=""> برنامه نویسی وب </a>
                                <ul>
                                    <li><a href=""> Asp.net WebForms </a></li>
                                    <li><a href=""> Asp.net MVC </a></li>
                                    <li><a href=""> PHP MVC </a></li>
                                    <li><a href=""> PHP FrameWorks </a></li>
                                    <li><a href=""> Asp.net Core </a></li>
                                </ul>
                            </li>
                            <li><a href=""> برنامه نویسی تحت ویندوز </a></li>
                            <li><a href=""> طراحی سایت </a>
                                <ul>
                                    <li><a href=""> طراحی سایت </a></li>
                                    <li><a href=""> Bootstrap </a></li>
                                    <li><a href=""> Angular </a></li>
                                    <li><a href=""> react </a></li>
                                    <li><a href=""> Jquery </a></li>
                                </ul>
                            </li>
                            <li><a href=""> بانک های اطلاعاتی </a></li>
                            <li><a href=""> سئو </a></li>
                            <li><a href=""> سیستم عامل </a></li>
                        </ul>
                    </nav>
                </div>
            </div>

</Fragment>
    )
}
