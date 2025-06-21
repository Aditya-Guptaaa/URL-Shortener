// import { verify } from "jsonwebtoken"
import { finduserByid } from "../dao/user.dao.js"
import { verifyToken } from "../utils/helper.js"
// import { finduserByid } from "../dao/user.dao.js"

export const authMiddleware = async (req, res, next) => {

    const token = req.cookies.accesstoken

    if (!token) {
        return res.status(401).json({ message: 'Unouthorized' })
    }
    try {
        const decoded = verifyToken(token)
        const user = await finduserByid(decoded)
        if (!user) {
            return res.status(401).json({ message: 'Unouthorized' })
        }
        req.user = user
        next()

    } catch (error) {
        return res.status(401).json({ message: 'Unouthorized', error })
    }
}