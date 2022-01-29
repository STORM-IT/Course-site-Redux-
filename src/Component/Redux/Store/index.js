import { loadingBarMiddleware } from "react-redux-loading-bar";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { getAllCouses } from "../Action/Courses";
import { reducers } from "../Reducer";

export const store=createStore(reducers,compose(
    applyMiddleware(thunk,loadingBarMiddleware()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

store.dispatch(getAllCouses())

store.subscribe(()=>console.log(store.getState()))