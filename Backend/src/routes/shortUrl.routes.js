import express from 'express'
import { CreateShortUrl } from '../controller/shortUrl.controller.js'
const router  = express.Router()

router.post('/',CreateShortUrl)


export default router