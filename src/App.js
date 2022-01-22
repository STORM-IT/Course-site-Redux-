import React, { Fragment } from 'react'
import {ToastContainer} from 'react-toastify'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
    useLocation,
    withRouter
    
  } from "react-router-dom";

import Acount_Info from './Component/Site Layout/Acount'
import Acount_Edit from './component/Site Layout/Acount_Create'
import Archive from './component/Site Layout/Archive'
import Footer from './component/Site Layout/Footer'
import Header from './component/Site Layout/Header'
import Head_Home from './component/Site Layout/Head_Home'
import Lessen from './component/Site Layout/Lesson'
import Login from './component/Site Layout/Login'
import Register from './component/Site Layout/Resister'

function App() {
  return (
    <Fragment>

          
            <Router>
            <Routes>
                   <Route path='/*' exact element={<Head_Home/>}/>
                   <Route path='/about/*'  element={<Header/>}/>
                </Routes>
                <Routes>
                <Route path='/about/Acount_Info' element={<Acount_Info />}/>
                <Route path='/about/Acount_Edit' element={<Acount_Edit />}/>
                <Route path='/' element={<Archive />}/>
                <Route path='/about/Lessen' element={<Lessen />}/>
                <Route path='/about/Login' element={<Login />}/>
                <Route path='/about/Register' element={<Register />}/>
                </Routes>
                <Footer />
            </Router>
            <ToastContainer/>
        </Fragment>
  );
}

export default App;
