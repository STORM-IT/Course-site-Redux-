import React from 'react'
import _ from 'lodash'

export default function Pagination({currentPage,totallCourses,courseLength,setPagination}) {
  
    const IndexCourses=Math.ceil(totallCourses/courseLength)
    const paginations=_.range(IndexCourses +1)
  return (
    <div>
        {paginations.map(pagin=>(
            <li className={pagin===currentPage?"page-item active":"page-item"}><a className="page-link pointer" href="#" onClick={setPagination(pagin)}>{pagin}</a></li>
        ))}
    </div>
  )
}
