import { createCourse, getCourses,deleteCourse,updateCourse } from './../../services/courseService'
import {toastify} from '../../utils/toastOption'

export const getAllCouses = () => {
    return async dispatch=>{
        const {data} =await getCourses();
        await dispatch({type:"INIT",payload:data.courses})
    }
}


export const createNewCourse = (course) => {
    return async (dispatch, getState) => {
        debugger
        const { data, status } = await createCourse(course);
        if (status === 201) toastify("SUCCESS","دوره با موفقیت ساخته شد");
        await dispatch({
            type: "ADD_COURSE",
            payload: [...getState().courses, data.course],
        });
    };
};

export const removeCourseTable=courseId=>{
    return async (dispatch,getState)=>{
        try{
            debugger
            const {status } = await deleteCourse(courseId)
            if(status==200)toastify("SUCCESS","دوره با موفقیت حذف شد ");
            await dispatch({
                type: "REMOVE_COURSE",
                payload: {...getState().courses},
            });
        }catch(ex){
            console.log(ex);
        }
    }
}
export const updateCourseTable=(courseId,course)=>{
    return async (dispatch,getState)=>{
        try{
            debugger
            const {status } = await updateCourse(courseId,course)
            if(status==200)toastify("SUCCESS","دوره با موفقیت ویرایش شد ");
            await dispatch({
                type: "UPDATE_COURSE",
                payload: [...getState().courses]
            });
        }catch(ex){
            console.log(ex);
        }
    }
}