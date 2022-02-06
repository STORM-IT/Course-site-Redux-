import { createCourse, getCourses } from './../../services/courseService'
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