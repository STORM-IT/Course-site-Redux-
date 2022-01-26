export const setUser=(user)=>{
    return async dispatch=>{
        await dispatch({type:"SET_USER" , payload:user})
    }
}
export const clearUser=()=>{
    return async dispatch=>{
        localStorage.removeItem("token");
        await dispatch({type:"CLEAR_USER" , payload:{}})
    }
}
