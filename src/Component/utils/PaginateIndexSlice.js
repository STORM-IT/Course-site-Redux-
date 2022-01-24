import _ from 'lodash'
export const paginate=(courses,pageCurrent,courseNumber)=>{
    const startIndex=(pageCurrent-1)*courseNumber;
    return _(courses).slice(startIndex).take(courseNumber).value();
   
}
