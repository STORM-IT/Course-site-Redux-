import { createContext } from "react";

export const context=createContext({
fullname:"",
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