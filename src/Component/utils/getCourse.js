import _ from 'lodash'
export const getCourse=(courses,pageCurrent,courseNumber)=>{
    const startIndex=(pageCurrent-1)*courseNumber;
    return _(courses).slice(startIndex).take(courseNumber).value();
}
