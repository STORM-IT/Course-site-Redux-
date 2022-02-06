export const coursesReducer=(state=[],action)=>{
    switch (action.type) {
        case "INIT":
            return [...action.payload]

            case "ADD_COURSE":
                return [...action.payload]
            case "REMOVE_COURSE":
                return [...action.payload]
        default:
            return state;
    }
}