import express from 'express'
import {getAllUsersUrls} from '../controller/user.controller.js'
import { authMiddleware } from '../middleware/auth.middleware.js'



const router = express.Router()


router.post('/urls',authMiddleware,getAllUsersUrls)


export default router