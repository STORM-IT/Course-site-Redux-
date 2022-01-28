import { createContext } from "react";

export const context=createContext({
fullname:"2",
setFullname:()=>{},
email:"",
setEmail:()=>{},
password:"",
setPassword:()=>{},
validator:null,
handleClearState:()=>{},
handleLogin:()=>{},
handleRegister:()=>{}
})