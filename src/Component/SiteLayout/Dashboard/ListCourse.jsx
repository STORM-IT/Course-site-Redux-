import { render } from '@testing-library/react';
import React, { Fragment, useContext, useState } from 'react'
import { useEffect } from 'react';
import { Alert, Button, Form, Offcanvas, Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { context } from '../../ContextApi/context';
import { removeCourseTable, searchCourse } from '../../Redux/Action/Courses';
import { paginate } from '../../utils/PaginateIndexSlice';
import Pagination from '../Pagination'
import CourseNewCanvas from './CourseNewCanvas';
import UpdateCourseCanvas from './updateCourseCanvas';
// import {} from ''

export default function List_Course({ courses }) {
  const [currentPage, setCurrentPage] = useState(1);
   const [Courses,setCourses]=useState(courses);
   
   const dispatch = useDispatch();

   useEffect(() => {
     setCourses(courses)
   },[courses]);

  const setPagination = (current) => {
    setCurrentPage(current);
  }
  const {showCanvasCreate,setShowCanvasCreate,showCanvasUpdate,setShowCanvasUpdate,courseUpdate,setCourseUpdate} = useContext(context);

  const filteCourse=(character)=>{
    
    setCourses(courses.filter(course=>course.title.includes(character)))
  }
  const IndedCourses = paginate(Courses, currentPage, 9)
  console.log("object");
  const handle_show_update_course=(course)=>{
    setCourseUpdate(course)
    setShowCanvasUpdate(true)
  }
  return (
    <Fragment>
      <div className='alert alert-primary m-0 d-flex justify-content-between'>
        <button className='btn btn-success btn-lg' onClick={()=> setShowCanvasCreate(true) }>+ Create course</button>
        <div className='w-25'>
        <Form.Control type="text" className='text-left' onChange={(e)=>filteCourse(e.target.value)} placeholder='Search'/>
        </div>
      </div>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>نام درس</th>
            <th>قیمت دوره</th>
            <th>ادیت دوره</th>
            <th>حذف دوره</th>
          </tr>
        </thead>
        <tbody>
          {IndedCourses.map(course => (

            <tr key={course._id}>
              <td>{course.title}</td>
              <td>{course.price == 0 ? "رایگان" : course.price}</td>
              <td >
                <button onClick={()=>handle_show_update_course(course)} className='btn btn-warning btn-sm w-100 h-100'><h4>Edite</h4></button>
              </td>
              <td><button onClick={()=>dispatch(removeCourseTable(course._id))} className='btn btn-danger btn-sm w-100 h-100'>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <nav className="navbar fixed-bottom">
        <div className="container-fluid">
         <Pagination currentPage={currentPage} totallCoursesLength={Courses.length} courseLength={9} setPagination={setPagination} />
        </div>
      </nav>
      {showCanvasCreate?<CourseNewCanvas/>:null}
      {showCanvasUpdate?<UpdateCourseCanvas />:null}
    </Fragment>
  )
}
