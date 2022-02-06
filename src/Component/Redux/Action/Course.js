import {getSingleCourse} from './../../services/courseService'
import {createCourse} from './../../services/courseService'

export const singleCourse=(id)=>{
    return async dispatch=>{
        const {data}=await getSingleCourse(id)
        await dispatch({type:"GET_COURSE" ,payload:data.course})
        
    }
}


