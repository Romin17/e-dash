import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
const Login =()=>{
    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');
    const navigate=useNavigate();
    useEffect(()=>{
        const auth =localStorage.getItem('user');
        if(auth)
        {
            navigate("/product")
        }

    })

    const handlelogin=async()=>
    {
        console.warn(email,password)
        let result = await fetch('http://localhost:5000/login',
            {
                method:'post',
                body:JSON.stringify({email,password}),
                headers:{
                    'Content-Type':'application/json'
                }
            });
            result = await result.json();
            console.warn(result)
            if(result.auth)
            {
                localStorage.setItem('user',JSON.stringify(result.user));
                localStorage.setItem('token',JSON.stringify(result.auth));
                navigate("/product")
            }
            else{
                alert("pleace enter correct details")
            }
    }
    return(
        <div className="login">
            <input className="inputbox" type="text" placeholder="Enter email" 
            onChange={(e)=>setEmail(e.target.value)} value={email}  ></input>
            <input className="inputbox" type="password" placeholder="Enter password"
            onChange={(e)=>setPassword(e.target.value)} value={password}></input>
            <button onClick={handlelogin} type="button" className="appbutton">Login</button>
        </div>
    )
}

export default Login