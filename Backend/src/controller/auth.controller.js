import { cookieOptions } from "../config/config.js"
import { LoginUser, RegisterUser } from "../services/auth.service.js"
import WrapAsync from "../utils/trycatchwrapper.js"


export const register_user = WrapAsync(async (req, res) => {
    const { name, email, password } = req.body
    const { token, user } = await RegisterUser(name, email, password)
    req.user = user
    res.cookie("accesstoken", token, cookieOptions)
    res.status(200).json({ message: "register successful" })

})

export const login_user = WrapAsync(async (req, res) => {
    const { email, password } = req.body
    const { token, user } = await LoginUser(email, password)
    req.user = user
    res.cookie("accesstoken", token, cookieOptions)
    res.status(200).json({ user: user, message: "login successful" })

})
export const logout_user = WrapAsync(async (req, res) => {
    res.clearCookie("accesstoken", cookieOptions)
    res.status(200).json({ message: "Logout Successful" })
})

export const get_current_user = WrapAsync(async (req, res) => {
    res.status(200).json({ user:req.user })
})


