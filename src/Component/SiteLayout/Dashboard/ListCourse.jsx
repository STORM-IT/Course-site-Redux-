import React, { Fragment, useContext, useState } from 'react'
import { useEffect } from 'react';
import { Alert, Button, Dropdown, Form, Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { context } from '../../ContextApi/context';
import { removeCourseTable, searchCourse } from '../../Redux/Action/Courses';
import { paginate } from '../../utils/PaginateIndexSlice';
import Pagination from '../Pagination'
import CourseNewCanvas from './CourseNewCanvas';
import UpdateCourseCanvas from './updateCourseCanvas';

export default function List_Course({ courses }) {

  const [Courses, setCourses] = useState(courses);
  const [Sort, setSort] = useState();
  const [, updateForce] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    setCourses(courses)
    setCourses(courses)
  }, [courses, Sort]);


  const { showCanvasCreate, setShowCanvasCreate, showCanvasUpdate, setShowCanvasUpdate, courseUpdate, setCourseUpdate, setPagination, currentPage } = useContext(context);
  const sortListCourse = sortType => {
    debugger
    switch (sortType) {
      case "HIGH":
        Courses.sort(function (a, b) { return b.price - a.price })
        updateForce(1)
        break;
      case "LOW":
        Courses.sort(function (a, b) { return a.price - b.price })
        updateForce(2)
        break;

      default:
        break;
    }

  }
  const filteCourse = (character) => {
    setCourses(courses.filter(course => course.title.includes(character)))
  }
  const IndedCourses = paginate(Courses, currentPage, 9)

  const handle_show_update_course = (course) => {
    setCourseUpdate(course)
    setShowCanvasUpdate(true)
  }
  return (
    <Fragment>
      <div className='alert alert-primary m-0 d-flex justify-content-between'>


        <button className='btn btn-success btn-lg' onClick={() => setShowCanvasCreate(true)}>+ Create course</button>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-button-dark-example1" size='lg' variant="secondary">
            مرتب سازی قیمت از
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item onClick={() => sortListCourse("LOW")}><h5>کم به زیاد</h5></Dropdown.Item>
            <Dropdown.Item onClick={() => sortListCourse("HIGH")}><h5>زیاد به کم</h5></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => sortListCourse("")}><h5>بدون فیلتر</h5></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className='w-25'>
          <Form.Control type="text" className='text-left' onChange={(e) => filteCourse(e.target.value)} placeholder='Search' />
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
                <button onClick={() => handle_show_update_course(course)} className='btn btn-warning btn-sm w-100 h-100'><h4>Edite</h4></button>
              </td>
              <td><button onClick={() => dispatch(removeCourseTable(course._id))} className='btn btn-danger btn-sm w-100 h-100'>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <nav className="navbar fixed-bottom">
        <div className="container-fluid">
          <Pagination currentPage={currentPage} totallCoursesLength={Courses.length} courseLength={9} setPagination={setPagination} />
        </div>
      </nav>
      {showCanvasCreate ? <CourseNewCanvas /> : null}
      {showCanvasUpdate ? <UpdateCourseCanvas /> : null}
    </Fragment>
  )
}
