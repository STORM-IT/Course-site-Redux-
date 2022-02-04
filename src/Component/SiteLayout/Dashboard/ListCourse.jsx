import React, { Fragment, useState } from 'react'
import { Table } from 'react-bootstrap'
import { paginate } from '../../utils/PaginateIndexSlice';
import Pagination from '../Pagination'
// import {} from ''

export default function List_Course({ courses }) {
  const [currentPage, setCurrentPage] = useState(1);

  const setPagination = (current) => {
    setCurrentPage(current);
  }

  const IndedCourses = paginate(courses, currentPage, 9)
  return (
    <Fragment>
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
      
    </Fragment>
  )
}
