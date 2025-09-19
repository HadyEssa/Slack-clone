import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    Image:{
        type:String,
        required:true
    },
    clerkId:{
        type:String,
        required:true
    }
},{ timestamps:true  // createdAt , updatedAt

}, )

export const User = mongoose.model("User",userSchema);