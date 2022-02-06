import { render } from '@testing-library/react';
import React, { Fragment, useContext, useState } from 'react'
import { Alert, Button, Form, Offcanvas, Table } from 'react-bootstrap'
import { context } from '../../ContextApi/context';
import { paginate } from '../../utils/PaginateIndexSlice';
import Pagination from '../Pagination'
import CourseNewCanvas from './CourseNewCanvas';

// import {} from ''

export default function List_Course({ courses }) {
  const [currentPage, setCurrentPage] = useState(1);

  const setPagination = (current) => {
    setCurrentPage(current);
  }
  const {showCanvas,setShowCanvas} = useContext(context);
  const IndedCourses = paginate(courses, currentPage, 9)
  console.log("object");
  return (
    <Fragment>
      <div className='alert alert-primary m-0 d-flex justify-content-between'>
        <button className='btn btn-success btn-lg' onClick={()=> setShowCanvas(true) }>+ Create course</button>
        <div className='w-25'>
        <Form.Control type="text" className='text-left' placeholder='Search'/>
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

            <tr>
              <td>{course.title}</td>
              <td>{course.price == 0 ? "رایگان" : course.price}</td>
              <td >
                <button className='btn btn-warning btn-sm w-100 h-100'><h4>Edite</h4></button>
              </td>
              <td><button className='btn btn-danger btn-sm w-100 h-100'><h4>Delete</h4> </button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <nav className="navbar fixed-bottom">
        <div className="container-fluid">
         <Pagination currentPage={currentPage} totallCoursesLength={courses.length} courseLength={9} setPagination={setPagination} />
        </div>
      </nav>
      {showCanvas?<CourseNewCanvas/>:null}
    </Fragment>
  )
}
