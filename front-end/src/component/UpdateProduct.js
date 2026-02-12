import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct =()=>{
    const [name,setName]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [category,setcategory]=React.useState('');
    const [company,setCompany]=React.useState('');
    const params =useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails = async()=>{
        console.warn(params)
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result= await result.json();
        setName(result.name)
        setPrice(result.price)
        setcategory(result.category)
        setCompany(result.company)
    }
    

    const updateproduct =async()=>
    {
        console.warn(name,price,category,company)
        let result=await fetch(`http://localhost:5000/product/${params.id}`,{
            method:'put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json()
          navigate('/product');
        
    }

    return(
        <div className="register"><h1>Update product</h1>
            
             <input type="text" className="inputbox" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter product Name"/>
            
             <input type="text" className="inputbox" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Price "/>
            
             <input type="text" className="inputbox" value={category} onChange={(e)=>setcategory(e.target.value)} placeholder="Enter Category"/>
           
             <input type="text" className="inputbox" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="Enter Company"/>

            <button onClick={updateproduct} type="button" className="appbutton">Update product</button>       
        </div>
    )
}

export default UpdateProduct;
