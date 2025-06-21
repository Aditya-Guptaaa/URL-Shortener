import User from '../models/user.model.js'
import UrlModel from '../models/shorturlSchema.model.js'
export const finduserByemail = async(email)=>{
    return await User.findOne({email})

}

export const finduserByemailByPassword = async(email)=>{
    return await User.findOne({email}).select("+password")

}

export const finduserByid = async(id)=>{
    return await User.findById(id)


}



export const createUser = async(name,email,password)=>{
    const newUser = new User({name,email,password}) 
    await newUser.save()
    return newUser

}

export const getAllUsersUrlsDao = async(id)=>{
    return await UrlModel.find({User:id})

}