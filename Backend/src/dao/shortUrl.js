import shortUrl from '../models/shorturlSchema.model.js'
import urlSchema from '../models/shorturlSchema.model.js'
import { ConflictError } from '../utils/errorHandler.js'
export const saveShortUrl = async (shortUrl, longUrl, UserId) => {
    // console.log(UserId ,"hola amigo")
    try {
        const newUrl = new urlSchema({
            full_url: longUrl,
            short_url: shortUrl,
            User: UserId
        })

        await newUrl.save()
    } catch (err) {
        if (err.code == 11000) {
            throw new ConflictError("short Url already exists")
        }
        throw new Error(err)
    }
}

export const getShortUrl = async (shortUrl) => {
    return await urlSchema.findOneAndUpdate({ short_url: shortUrl }, { $inc: { clicks: 1 } })

}

export const getCustomUrl = async (slug) => {
    return await urlSchema.findOne({ short_url: slug })
}