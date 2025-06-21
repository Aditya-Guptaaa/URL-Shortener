import { getShortUrl } from "../dao/shortUrl.js"
import { createshortUrlwithoutUser, createshortUrlwithUser } from "../services/shortUrl.service.js"
// import { generatenanoID } from "../utils/helper.js"
// import urlSchema from '../models/shorturlSchema.model.js'
// import { getShortUrl } from "../dao/shortUrl.js"
import WrapAsync from "../utils/trycatchwrapper.js"


export const CreateShortUrl = WrapAsync(async (req, res) => {

    const data = req.body
    let shortUrl
    if (req.user) {
        shortUrl = await createshortUrlwithUser(data.url, req.user._id, data.slug)
    } else {
        shortUrl = await createshortUrlwithoutUser(data.url)
    }

    res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl })

})


export const redirectFromShortUrl = WrapAsync(async (req, res) => {

    const { id } = req.params
    const url = await getShortUrl(id)
    if (!url) {
        throw new Error("short url not found")
    }
    res.redirect(url.full_url)


})

export const createCustomShortUrl = WrapAsync(async (req, res) => {
    const { url, slug } = req.body
    const shortUrl = await createshortUrlwithoutUser(url, slug)
    res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl })
})