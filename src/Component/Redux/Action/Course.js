import {getSingleCourse} from './../../services/courseService'
import {createCourse} from './../../services/courseService'

export const singleCourse=(id)=>{
    return async dispatch=>{
        const {data}=await getSingleCourse(id)
        await dispatch({type:"GET_COURSE" ,payload:data.course})
        
    }
}

export const newCourse=(title,info,price,image)=>{
    return async dispatch=>{
        const course={
            title,
            info,
            price,
            image,
            id:Math.floor(Math.random()*1000)
        }
        const {data} = createCourse(course);
        await dispatch({type:"CREATE_COURSE" , payload:data.course})
    }
}
