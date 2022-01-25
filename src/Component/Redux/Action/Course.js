import {getSingleCourse} from './../../services/courseService'
export const singleCourse=(id)=>{
    return async dispatch=>{
        // const Courses=[...state().courses];
        // debugger
        const {data}=await getSingleCourse(id)
        
        // console.log(FindCourse);
        await dispatch({type:"GET_COURSE" ,payload:data.course})
        
    }
}
// import { getSingleCourse } from "./../../services/courseService";

// export const getSingleCourse = courseId => {
//     return async dispatch => {
//         const { data } = await getSingleCourse(courseId);
//         await dispatch({ type: "GET_COURSE", payload: data.course });
//     };
// };
