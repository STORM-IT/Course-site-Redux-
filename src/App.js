import React, { Fragment, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

import {
  BrowserRouter as Router,
  Routes,
  Route ,
  Navigate
} from "react-router-dom";
// import {useNavigate} from 'react-router-dom'

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
import Navbar from './Component/SiteLayout/Navbar';

import http from './Component/services/config.json'
import { useDispatch, useSelector } from 'react-redux';
import { paginate } from './Component/utils/PaginateIndexSlice';
import { clearUser, setUser } from './Component/Redux/Action/Use';
import { decodeToken } from './Component/utils/decodeToken';
import _ from 'lodash';


function App() {
  const dispatch =useDispatch();
  // let navigatec = useNavigate();
  const User=useSelector(state=>state.user)
  
  useEffect(() => {
    require("./Component/JsFile/script")
    
    const token=localStorage.getItem("token")
    if(token){
      console.log(token);
      const decoded=decodeToken(token)
      // console.log("decoded exp is : " + decoded.exp + "and date now is : " + Date.now()/1000);
      if (decoded.exp < Math.floor(Date.now()/1000)) {
        dispatch(clearUser())
        localStorage.removeItem('token')
        
      } else {
        dispatch(setUser(decoded.user))
        
      }
    }
    // navigate("/archive")
  }, []);

  const courses = useSelector(state => state.courses)
  const IndexCourses = paginate(courses, 1, 8);
  // console.log(courses);
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/about/*' element={<Header />} />
          <Route path='/as' exact element={<Head_Home />} />
         
        </Routes>
        <Routes>
          <Route path='/' exact element={<Navigate replace to="/as" />} />

        </Routes>
        <Navbar />
        <Routes>
          <Route path='/about/Acount_Info' element={<Acount_Info />} />
          <Route path='/about/Acount_Edit' element={<Acount_Edit />} />
          <Route path='/about/archive' element={<Archive courses={paginate(courses, 1, 12)} http={http.toplearnapi} />} />
          <Route path='/about/Lessen' element={<Lessen />} />
          <Route path='/about/Login' element={<Login />} />
          <Route path='/about/Register' element={<Register />} />
          <Route path='/archive/singleCourse' element={<SingleCourse http={http.toplearnapi} />} />
          <Route path='/as' element={<Course courses={IndexCourses} />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
