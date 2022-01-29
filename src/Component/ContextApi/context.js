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
    pageNotFound:true,
    setPageNotFound:()=>{},
    validator: null,
    handleClearState: () => { },
    handleLogin: () => { },
    handleRegister: () => { }
})