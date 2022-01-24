import React from 'react'
import _ from 'lodash'

export default function Pagination({currentPage,totallCoursesLength,courseLength,setPagination}) {
  
    const IndexCourses=Math.ceil(totallCoursesLength/courseLength)
    const paginations=_.range(IndexCourses +1)
    debugger
  return (
    <nav aria-label="Page navigation">
    <ul className="pagination justify-content-center">
        <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true"><i className="zmdi zmdi-chevron-right"></i></span>
            </a>
        </li>
        
    {paginations.map(pagin=>(
        // <li className="page-item active" key={pagin}><a className="page-link pointer" href="#" onClick={()=>setPagination(pagin)}>{pagin}</a></li>
        <li className={pagin===currentPage-1?"page-item active":"page-item"} key={pagin}><a className="page-link pointer" href="#" onClick={()=>setPagination(pagin)}>{pagin}</a></li>
    ))}
        <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true"><i className="zmdi zmdi-chevron-left"></i></span>
            </a>
        </li>
    </ul>
</nav>
    
    
  )
}
