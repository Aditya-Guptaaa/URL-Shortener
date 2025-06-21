// import jsonwebtoken from 'jsonwebtoken'     
// import User from '../models/user.model.js'
import { createUser, finduserByemail, finduserByemailByPassword } from '../dao/user.dao.js'
import { ConflictError } from '../utils/errorHandler.js'
import { signToken } from '../utils/helper.js'
// import {comparePassword} from '../models/user.model.js'

export const RegisterUser = async (name, email, password) => {
    const user = await finduserByemail(email)
    if (user) {
        throw new ConflictError('User already exists')

    }
    const newUser = await createUser(name, email, password)
    const token =  signToken({ id: newUser._id })

    return { token, user:newUser }
}

export const LoginUser = async (email, password) => {
    const user = await finduserByemailByPassword(email)
    if (!user) { throw new Error('Invalid username or password') }
    const ispasswordValid = await user.comparePassword(password)
    if (!ispasswordValid) {
        throw new Error('Invalid username or password')
    }

    const token = signToken({ id: user._id })
    // delete user.password

    return { token, user }
}