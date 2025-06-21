// import { JsonWebTokenError } from "jsonwebtoken"
import { nanoid } from "nanoid"
// import { cookieOptions } from "../config/config.js"
import Jsonwebtoken from  'jsonwebtoken'
import {cookieOptions} from '../config/config.js'


export const generatenanoID = (length)=>{
    return nanoid(length)
}


export  const signToken = (payload)=>{
    return Jsonwebtoken.sign(payload,process.env.JWT_SECRET,{expiresIn:"1h"})
    

}

export  const verifyToken = (token)=>{
    const decoded= Jsonwebtoken.verify(token,process.env.JWT_SECRET)
    console.log(decoded.id)
    return decoded.id

}