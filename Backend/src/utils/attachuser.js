
import { verifyToken } from "./helper.js"
import { finduserByid } from "../dao/user.dao.js"

export const attachUser =async(req,res,next)=>{
    // console.log(req.cookies.accesstoken)
    const token = req.cookies.accesstoken
  
    if(!token){
        return next()
    }
    try{
        const decoded = verifyToken(token)
        const user = await finduserByid(decoded)
        
        if(!user){
            return next()
        }
        req.user = user
        next()
    }
    catch(error){
        console.log(error)
        next()
    }

}