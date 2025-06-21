// import { Request,Response ,NextFunction} from "express";
// import AppError from '../errors/AppError'

export const ErrorHandler =(err,req,res,next)=>{
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            success:false,
            message:err.message,
        })
    }
   
    res.status(500).json({
        success:false,
        message:err.message||"Internal server Error"
    })
}

export class AppError extends Error{
    statusCode
    isOpertional
     
    constructor(message,statusCode=500,isOpertional=true){
    super(message)
    this.statusCode=statusCode
    this.isOpertional=isOpertional
    Error.captureStackTrace(this,this.constructor)
}

}

export class NotFoundError extends AppError{
    constructor(message="Resource not found"){
        super(message,404)
    }

}
export class ConflictError extends AppError{
    constructor(message="Conflict occured"){
        super(message,409)
    }

}
export class BadRequestError extends AppError{
    constructor(message="Bad Request"){
        super(message,400)
    }

}
export class UnouthorizedError  extends AppError{
    constructor(message="Unouthorized"){
        super(message,401)
    }

}