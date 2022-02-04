import React, { Fragment, useContext, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams
} from "react-router-dom";
// import {useNavigate} from 'react-router-dom'

import Acount_Info from './Component/SiteLayout/Acount'
import Acount_Edit from './Component/SiteLayout/Acount_Create'
import Archive from './Component/SiteLayout/Archive'
import Footer from './Component/SiteLayout/Footer'
import Header from './Component/SiteLayout/Header'
import Head_Home from './Component/SiteLayout/Head_Home'
import Lessen from './Component/SiteLayout/Lesson'
import Login from './Component/SiteLayout/Login/Login'
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
import Logout from './Component/SiteLayout/Login/Logout';
import Progress from 'react-progress-2'
import { checkId } from './Component/utils/checkFormatId';
import PrivateLayout from './Component/SiteLayout/admin/PrivateLayout';
import Dashboard from './Component/SiteLayout/admin/Dashboard';
import ListCourse from './Component/SiteLayout/Dashboard/ListCourse';


function App() {
  const dispatch = useDispatch();
  const User = useSelector(state => state.user)

  useEffect(() => {
    require("./Component/JsFile/script")
    // debugger
    console.log("App start");
    const token = localStorage.getItem("token")

    if (token != undefined) {
      console.log(token);
      const decoded = decodeToken(token)
      // debugger
      // console.log("decoded exp is : " + decoded.exp + "and date now is : " + Date.now()/1000);
      const checkFID = checkId(decoded.user.userId);
      // console.log(checkFID);
      if (decoded.exp < Math.floor(Date.now() / 1000)) {
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
  // dispatch(showLoading())
  console.log(window.location.pathname);

  return (

    <Fragment>
      {/* <Router> */}

          <Routes>
            <Route path="dashboard" element={<PrivateLayout location={window.location.pathname}/>}>
              <Route path="courses" element={<ListCourse courses={courses} />}/>
              <Route path=""  element={<Dashboard courses={courses} />}/>
            </Route>
            <Route path="/*" element={(
              <Fragment>
                <Routes>
                  <Route path='/Logout' exact element={_.isEmpty(User) ? <Navigate to="/" /> : <Logout />} />
                  <Route path='/' exact element={<Head_Home />} />
                  <Route path='/*' element={<Header />} />
                </Routes>
                <Routes>
                  <Route path='/' exact element={<Course courses={IndexCourses} />} />
                  <Route path='/Login' element={<Login />} />
                  <Route path='/Acount_Info' element={<Acount_Info />} />
                  <Route path='/archive' element={<Archive courses={paginate(courses, 1, 12)} http={http.toplearnapi} />} />
                  <Route path='/Acount_Edit' element={<Acount_Edit />} />
                  <Route path='/Lessen' element={<Lessen />} />
                  <Route path='/Register' element={<Register />} />
                  <Route path='/archive/singleCourse' element={<SingleCourse http={http.toplearnapi} />} />
                  <Route path='*' element={<img src='./images/404/404.png' />} />
                </Routes>
                <Routes>
                  <Route path='/*' element={<Footer />} />
                </Routes>
              </Fragment>
            )} />
          </Routes>
            {/* </Router> */}
        
      <Progress.Component />
      <ToastContainer />
    </Fragment>
  );
}

export default App;
