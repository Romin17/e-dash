import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList=()=>{
    const [cnt,setCnt]=useState(0);

    useEffect(()=>{
        if(cnt===0)
        {
            document.title=`Clicked` 
        }
        else
        document.title=`Clicked (${cnt})`
        console.log("useEffect `${cnt}`",`${cnt}"`)
    },[cnt])
    console.log("render,",`${cnt}`)

    return(
        <div>
            <button onClick={()=>setCnt(cnt+1)}>Click me</button>
        </div>
    )
}

export default ProductList;