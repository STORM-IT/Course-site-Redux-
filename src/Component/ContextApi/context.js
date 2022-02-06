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
    showCanvas: false,
    setShowCanvas: () => { },
    validator: null,
    handleClearState: () => { },
    handleLogin: () => { },
    handleRegister: () => { }
})