import mongoose from "mongoose";
const ShortUrlSchema= new mongoose.Schema({
    full_url:{
        type:String,
        required:true,
    },
    short_url:{
        type:String,
        required:true,
        index:true,
        unique:true
    },
    clicks:{
        type:Number,
        required:true,
        default:0,
    },
    User:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:false
    }
})

const shortUrl = mongoose.model("shortUrl", ShortUrlSchema)
export default shortUrl