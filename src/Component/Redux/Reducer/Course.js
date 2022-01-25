export const courseReducer=(state={},action)=>{
    console.log("s");
    switch (action.type) {
        case "GET_COURSE":
            return {...action.payload}
        
    
        default:
            return state;
    }
}