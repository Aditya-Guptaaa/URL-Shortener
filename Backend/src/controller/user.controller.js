// import { getShortUrl } from "../dao/shortUrl.js";
import WrapAsync from "../utils/trycatchwrapper.js";
import { getAllUsersUrlsDao } from "../dao/user.dao.js";

export const getAllUsersUrls = WrapAsync(async (req, res) => {
    // console.log(req.user)
    const { _id } = req.user
    const urls = await getAllUsersUrlsDao(_id)
    res.status(200).json({ message: "Success", urls })
})