import React, { Fragment, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useLocation,
  withRouter

} from "react-router-dom";

import Acount_Info from './Component/SiteLayout/Acount'
import Acount_Edit from './Component/SiteLayout/Acount_Create'
import Archive from './Component/SiteLayout/Archive'
import Footer from './Component/SiteLayout/Footer'
import Header from './Component/SiteLayout/Header'
import Head_Home from './Component/SiteLayout/Head_Home'
import Lessen from './Component/SiteLayout/Lesson'
import Login from './Component/SiteLayout/Login'
import Register from './Component/SiteLayout/Resister'
import SingleCourse from './Component/SiteLayout/SingleCourse'
import Course from './Component/SiteLayout/Course';

function App() {
  useEffect(() => {
  require("./Component/JsFile/script")
  }, []);
  
  return (
    <Fragment>


      <Router>
        <Routes>
          <Route path='/*' exact element={<Head_Home />} />
          <Route path='/about/*' element={<Header />} />
        </Routes>
        <Routes>
          <Route path='/about/Acount_Info' element={<Acount_Info />} />
          <Route path='/about/Acount_Edit' element={<Acount_Edit />} />
          <Route path='/archive' element={<Archive />} />
          <Route path='/about/Lessen' element={<Lessen />} />
          <Route path='/about/Login' element={<Login />} />
          <Route path='/about/Register' element={<Register />} />
          <Route path='/singleCourse/TelegramRobot' element={<SingleCourse />} />
          <Route path='/' element={<Course />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
