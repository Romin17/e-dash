const mongoose=require('mongoose');

const templateSchema=new mongoose.Schema(
    {
        tempname:String,
        lastname:String
    }
);
module.exports=mongoose.model("templates",templateSchema);