import { getCourses } from './../../services/courseService'

export const getAllCouses = () => {
    return async dispatch=>{
        const {data} =await getCourses();
        await dispatch({type:"INIT",payload:data.courses})
    }
}