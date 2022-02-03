import React, { Fragment } from 'react'
import { Table } from 'react-bootstrap'
// import {} from ''

export default function List_Course({ courses }) {
  return (
    <Fragment>
         <Table striped bordered hover>
          <thead>
            <tr>
              <th>نام درس</th>
              <th>قیمت دوره</th>
              <th>ادیت دوره</th>
              <th>حذف دوره</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course=>(

            <tr>
              <td>{course.title}</td>
              <td>{course.price==0?"رایگان":course.price}</td>
              <td>
                <button className='btn btn-warning btn-sm'>Edite</button>
              </td>
              <td><button className='btn btn-danger btn-sm'>Delete</button></td>
            </tr>
            ))}
          </tbody>
        </Table> 
    </Fragment>
  )
}
