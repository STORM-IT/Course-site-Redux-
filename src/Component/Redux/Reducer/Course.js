export const courseReducer=(state={},action)=>{
    switch (action.type) {
        case "GET_COURSE":
            return {...action.payload}
        case "CREATE_COURSE":
            return {...action.payload}
        case "DELETE_COURSE":
            return {...action.payload}
        case "UPDATE_COURSE":
            return {...action.payload}
        default:
            return state;
    }
}