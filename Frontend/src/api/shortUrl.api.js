// import axios from "axios";
import axiosinstance from "../utils/axiosinstance.js";

export const createshorturl= async(url,slug)=>{
    const {data} =  await axiosinstance.post("/api/create" ,{url,slug})
    return data.shortUrl
}