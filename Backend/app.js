import express, { json } from 'express'
import cookieParser from 'cookie-parser'
import connectDB from './src/config/mongo.config.js'
import urlSchema from "./src/models/shorturlSchema.model.js"
import shortUrlRoutes from './src/routes/shortUrl.routes.js'
import { nanoid } from 'nanoid'
import dotenv from 'dotenv'
import { redirectFromShortUrl } from './src/controller/shortUrl.controller.js'
import { ErrorHandler } from './src/utils/errorHandler.js'
import cors from "cors"
import authRoutes from './src/routes/auth.routes.js'
import { attachUser } from './src/utils/attachuser.js'
import userRoutes from './src/routes/user.route.js'


dotenv.config("./.env")

const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(attachUser)
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)
app.use("/api/create", shortUrlRoutes)
app.get("/:id", redirectFromShortUrl)
app.use(ErrorHandler)
app.listen(3000, () => {
    connectDB()
    console.log("Server is running on port 3000")
})

//GET-Redirect
//POST-create short url