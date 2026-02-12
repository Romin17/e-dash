const mongoose=require('mongoose');

const prodductSchema=new mongoose.Schema(
    {
        name:String,
        price:String,
        category:String,
        userid:String,
        company:String
    }
);
module.exports=mongoose.model("products",prodductSchema);