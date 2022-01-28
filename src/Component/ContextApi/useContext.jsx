import React, { useRef, useState } from 'react'
import { Provider, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import SimpleReactValidator from 'simple-react-validator';
import { setUser } from '../Redux/Action/Use';
import { loginUser } from '../services/userServices';
import { decodeToken } from '../utils/decodeToken';
import { context } from './context';

export default function useContext() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [,forceUpdate]=useState();

    const dispatch = useDispatch()
    const style_validator={
        backgroundColor:"gray",borderRadius:'5px',color:'white',padding:'3px 10px'
    }
    const validator = useRef(new SimpleReactValidator({
        
        messages:{
            email:"لطفا ایمیل معتبر وارد کنید",
            min:"حروف وارد شده نباید کمتر از 5 حرف باشد",
            required:"لطفا فیلد را پرکنید"
        },
        element:message=><div style={style_validator}>{message}</div>
    }));
    const Reset = () => {
        setEmail("");
        setPassword("");
    }
    const navigate = useNavigate();
    const handleLogin = async event => {
        event.preventDefault();
        const user = {
            email, password
        }

        try {
            if (validator.current.allValid()) {
                

                const { status, data , token } = await loginUser(user);
                if (status === 200) {
                    toast.success('login seccess', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                console.log(data.token);
                localStorage.setItem('token', data.token);
                dispatch(setUser(decodeToken(data.token).user))
                // history.replace('/');
                
                navigate('/')
                // navigate('/', { replace: true })

            }else{
                validator.current.showMessages();
                forceUpdate(1);
            }




        } catch {
            toast.error('login filed', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }
    console.log(validator);
  return (
    <context.Provider value={
        email,
        setEmail,
        password,
        setPassword,
        validator,
        handleLogin
    }>
      
    </context.Provider>
  )
}
