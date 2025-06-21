import { generatenanoID } from "../utils/helper.js"
// import urlSchema from '../models/shorturlSchema.model.js'
import { getCustomUrl, saveShortUrl } from "../dao/shortUrl.js"

export const createshortUrlwithoutUser =async(url)=>{
   
   const shortUrl=  generatenanoID(7)
   if( !shortUrl){
       throw new Error("Short url is not generated")
   }
    await saveShortUrl(shortUrl,url)
    
   return shortUrl


} 
export const createshortUrlwithUser =async(url,UserId,slug=null)=>{
   const shortUrl=  slug ||   generatenanoID(7)
   if (slug) {
  const exists = await getCustomUrl(slug)
  if (exists) {
    throw new Error("custom url already exists")
  }
}
   //   console.log("UserId being passed:", UserId);
    await saveShortUrl(shortUrl,url,UserId)
    
   return shortUrl

} 