import { createContext } from "react";

export const context = createContext({
    fullname: "",
    setFullname: () => { },
    email: "",
    setEmail: () => { },
    password: "",
    setPassword: () => { },
    policy: "",
    setPolicy: () => { },
    pageNotFound: true,
    setPageNotFound: () => { },
    showCanvasCreate: false,
    setShowCanvasCreate: () => { },
    showCanvasUpdate: false,
    setShowCanvasUpdate: () => { },
    courseUpdate:{},
    setCourseUpdate:()=>{},
    currentPage:0,
    setPagination:()=>{},
    validator: null,
    handleClearState: () => { },
    handleLogin: () => { },
    handleRegister: () => { }
})