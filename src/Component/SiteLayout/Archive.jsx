import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Archive({ courses, http }) {
    const courses_state=useSelector(state=>state.courses)
    // debugger
    const paginationLength=Math.ceil(courses_state.length/courses.length)
    return (
        <Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>تاپلرن | دوره ها</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="main-menu">
                <div className="container">
                    <nav>
                        <span className="responsive-sign"><i className="zmdi zmdi-menu"></i></span>
                        <ul>
                            <li><a href=""> برنامه نویسی موبایل </a>
                                <ul>
                                    <li><a href=""> زامارین  Xamarin </a></li>
                                    <li><a href=""> react Native </a></li>
                                </ul>
                            </li>
                            <li><a href=""> برنامه نویسی وب </a>
                                <ul>
                                    <li className=""><a href=""> Asp.net WebForms </a></li>
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


            <div className="container">
                <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">تاپ لرن</a></li>
                        <li className="breadcrumb-item active"><a href="#">دوره ها</a></li>
                        <li className="breadcrumb-item active" aria-current="page"> برنامه نویسی وب </li>
                    </ul>
                </nav>
            </div>

            <div className="container">
                <section className="term-categories">

                    <div className="top-bar">

                        <header><h1> دوره های <span> برنامه نویسی وب </span> </h1> <span> {courses.length} دوره </span></header>

                        <div className="row">
                            <div className="col-md-4 col-sm-12 col-xs-12 pull-right">
                                <form action="" method="">
                                    <div className="input">
                                        <input type="text" name="" placeholder="موضوع مورد نظر ..." />
                                        <button><i className="zmdi zmdi-search"></i></button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12 pull-right">
                                <div className="switch-field available">
                                    <input id="available-filter-1" name="available" value="all" checked="" type="radio" />
                                    <label for="available-filter-1"> همه </label>
                                    <input id="available-filter-2" name="available" value="off" type="radio" />
                                    <label for="available-filter-2"> خریدنی </label>
                                    <input id="available-filter-3" name="available" value="normal" type="radio" />
                                    <label for="available-filter-3"> رایگان </label>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12 pull-left">
                                <div className="select-ddl">
                                    <select>
                                        <option> مرتب سازی </option>
                                        <option> قیمت </option>
                                        <option> مدرت زمان دوره </option>
                                        <option> تاریخ انتشار </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <aside className="col-lg-3 col-md-4 col-sm-12 col-xs-12">

                            <section className="aside-section filter-by-category">
                                <header><h3> دسته بندی موضوعات </h3></header>
                                <div className="inner">
                                    <ul>
                                        <li>
                                            <input type="checkbox" name="" id="cat-1" />
                                            <label for="cat-1"> برنامه نویسی وب </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="" id="cat-2" />
                                            <label for="cat-2"> برنامه نویسی موبایل </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="" id="cat-3" />
                                            <label for="cat-3"> برنامه نویسی وب </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="" id="cat-4" />
                                            <label for="cat-4"> برنامه نویسی موبایل </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="" id="cat-5" />
                                            <label for="cat-5"> برنامه نویسی وب </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="" id="cat-6" />
                                            <label for="cat-6"> برنامه نویسی موبایل </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="" id="cat-7" />
                                            <label for="cat-7"> برنامه نویسی وب </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="" id="cat-8" />
                                            <label for="cat-8"> برنامه نویسی موبایل </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="" id="cat-9" />
                                            <label for="cat-9"> برنامه نویسی وب </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="" id="cat-10" />
                                            <label for="cat-10"> برنامه نویسی موبایل </label>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                        </aside>

                        <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">

                            <section className="terms-items">
                                <div className="row">
                                    {courses.map(course => (

                                        <div key={course._id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                                            <article>
                                                <Link to={http + "/" + course._id} className="img-layer"><img src="images/pic/1.jpg" /></Link>
                                                <h2><Link to={http + "/" + course._id}>{course.title}</Link></h2>
                                                <span>{course.price}</span>
                                                <i>1:52:32</i>
                                            </article>
                                        </div>
                                    ))}

                                </div>


                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true"><i className="zmdi zmdi-chevron-right"></i></span>
                                            </a>
                                        </li>
                                        <li className={"page-item"  + "active"}><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true"><i className="zmdi zmdi-chevron-left"></i></span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>

                            </section>

                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}
