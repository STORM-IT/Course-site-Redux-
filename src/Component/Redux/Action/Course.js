import {getSingleCourse} from './../../services/courseService'
export const singleCourse=(id)=>{
    return async (dispatch,state)=>{
        // const Courses=[...state().courses];
        debugger
        const {data}=await getSingleCourse(id)
        
        // console.log(FindCourse);
        await dispatch({type:"GET_SINGLE_COURSE" ,payload:data})
    }
}