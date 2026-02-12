import React from "react";

const AddProduct =()=>{
    const [name,setName]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [category,setcategory]=React.useState('');
    const [company,setCompany]=React.useState('');
    const [error,seterror]=React.useState(false);


    const addproduct =async()=>
    {
        if(!name || !price || !category || !company)
         {
            seterror(true)
            return false;
         }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result=await fetch("http://localhost:5000/add-product",
            {
                method:'post',
                body:JSON.stringify({name,price,category,company,userId}),
                headers:{
                    'Content-Type':'application/json'
                }
            });
            result=await result.json();
            console.warn(result);
    }

    return(
        <div className="register"><h1>Add product</h1>
            
             <input type="text" className="inputbox" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter product Name"/>
            {error && !name && <span className="invalid">Enter valid name</span>}
             <input type="text" className="inputbox" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Price "/>
            {error && !price && <span className="invalid">Enter valid Price</span>}
             <input type="text" className="inputbox" value={category} onChange={(e)=>setcategory(e.target.value)} placeholder="Enter Category"/>
            {error && !category && <span className="invalid">Enter valid Category</span>}
             <input type="text" className="inputbox" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="Enter Company"/>
            {error && !company && <span className="invalid">Enter valid Company</span>}
            <button onClick={addproduct} type="button" className="appbutton">Add product</button>       
        </div>
    )
}

export default AddProduct;