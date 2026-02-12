import React,{useState,useEffect}from "react";
//import { json } from "react-router-dom";
import {useNavigate} from 'react-router-dom'//for path Ridect go to one url to another url
const Signup=()=>{
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const navigate=useNavigate();//object of usenavigate

    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth)
        {
            navigate('/product')
        }
    })

    const collectData=async()=>
    {
        console.warn(name,email,password);//FETCH IS USE FOR API INTIGRATE....
        let result = await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result=await result.json()
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result));//all data in store in local store..
        navigate('/Product')//when user complete the signup page and submit and then user ridect on product site...
        
    }

    return(
        <div className="register">
            <h1>Register</h1>
            <input type="text" className="inputbox" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
            <input type="email" className="inputbox" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
            <input type="password" className="inputbox" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"/>
            <button onClick={collectData} type="button" className="appbutton">Sign Up</button>
        </div>
    )
}

export default Signup;