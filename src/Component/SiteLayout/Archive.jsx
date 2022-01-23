import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

export default function Archive() {
  return (
    <Fragment>
        <Helmet>
            <meta charSet="utf-8" />
                <title>تاپلرن | دوره ها</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
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


            <div class="container">
                <nav aria-label="breadcrumb">
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">تاپ لرن</a></li>
                        <li class="breadcrumb-item active"><a href="#">دوره ها</a></li>
                        <li class="breadcrumb-item active" aria-current="page"> برنامه نویسی وب </li>
                    </ul>
                </nav>
            </div>

            <div class="container">
                <section class="term-categories">

                    <div class="top-bar">

                        <header><h1> دوره های <span> برنامه نویسی وب </span> </h1> <span> 123 دوره </span></header>

                        <div class="row">
                            <div class="col-md-4 col-sm-12 col-xs-12 pull-right">
                                <form action="" method="">
                                    <div class="input">
                                        <input type="text" name="" placeholder="موضوع مورد نظر ..." />
                                        <button><i class="zmdi zmdi-search"></i></button>
                                    </div>
                                </form>
                            </div>
                            <div class="col-md-4 col-sm-6 col-xs-12 pull-right">
                                <div class="switch-field available">
                                    <input id="available-filter-1" name="available" value="all" checked="" type="radio" />
                                    <label for="available-filter-1"> همه </label>
                                    <input id="available-filter-2" name="available" value="off" type="radio" />
                                    <label for="available-filter-2"> خریدنی </label>
                                    <input id="available-filter-3" name="available" value="normal" type="radio" />
                                    <label for="available-filter-3"> رایگان </label>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-xs-12 pull-left">
                                <div class="select-ddl">
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

                    <div class="row">

                        <aside class="col-lg-3 col-md-4 col-sm-12 col-xs-12">

                            <section class="aside-section filter-by-category">
                                <header><h3> دسته بندی موضوعات </h3></header>
                                <div class="inner">
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

                        <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12">

                            <section class="terms-items">
                                <div class="row">

                                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                                        <article>
                                            <a href="" class="img-layer"><img src="images/pic/1.jpg" /></a>
                                            <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                                            <span> رایگان </span>
                                            <i>1:52:32</i>
                                        </article>
                                    </div>


                                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                                        <article>
                                            <a href="" class="img-layer"><img src="images/pic/2.jpg" /></a>
                                            <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                                            <span> رایگان </span>
                                            <i>1:52:32</i>
                                        </article>
                                    </div>

                                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                                        <article>
                                            <a href="" class="img-layer"><img src="images/pic/3.jpg" /></a>
                                            <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                                            <span> 150.000 تومان </span>
                                            <i>1:52:32</i>
                                        </article>
                                    </div>

                                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                                        <article>
                                            <a href="" class="img-layer"><img src="images/pic/4.jpg" /></a>
                                            <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                                            <span> رایگان </span>
                                            <i>1:52:32</i>
                                        </article>
                                    </div>

                                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                                        <article>
                                            <a href="" class="img-layer"><img src="images/pic/5.jpg" /></a>
                                            <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                                            <span> 15.000 تومان </span>
                                            <i>1:52:32</i>
                                        </article>
                                    </div>

                                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                                        <article>
                                            <a href="" class="img-layer"><img src="images/pic/6.jpg" /></a>
                                            <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                                            <span> رایگان </span>
                                            <i>1:52:32</i>
                                        </article>
                                    </div>

                                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                                        <article>
                                            <a href="" class="img-layer"><img src="images/pic/7.jpg" /></a>
                                            <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                                            <span> 20.000 تومان </span>
                                            <i>1:52:32</i>
                                        </article>
                                    </div>

                                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                                        <article>
                                            <a href="" class="img-layer"><img src="images/pic/8.jpg" /></a>
                                            <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                                            <span> 75.000 تومان </span>
                                            <i>1:52:32</i>
                                        </article>
                                    </div>


                                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                                        <article>
                                            <a href="" class="img-layer"><img src="images/pic/4.jpg" /></a>
                                            <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                                            <span> 75.000 تومان </span>
                                            <i>1:52:32</i>
                                        </article>
                                    </div>

                                </div>


                                <nav aria-label="Page navigation">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true"><i class="zmdi zmdi-chevron-right"></i></span>
                                            </a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true"><i class="zmdi zmdi-chevron-left"></i></span>
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
