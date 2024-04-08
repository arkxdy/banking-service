/*
    Catch Errors Handle
*/
import { NextFunction, Request, Response } from "express"

exports.catchErros = (fn:Function) => {
    return function (req: Request, res: Response, next: NextFunction) {
        return fn(req, res, next).catch((error:Error) => {
            if(error.name == 'ValidationError') {
                return res.status(400).json({
                    success: false,
                    result: null,
                    message: 'Required fields are not supported',
                    controller: fn.name,
                    error: error,
                })
            } else {
                return res.status(500).json({
                    success: false,
                    result: null,
                    message: error.message,
                    controller: fn.name,
                    error: error,
                })
            }
        })
    }
}

exports.notFound = (_req: Request, res: Response) => {
    return res.status(404).json({
        success: false,
        messgae: "Api url doesn't exist ",
    })
}

exports.developmentErrors = (error: Error, _req: Request, res: Response) => {
    error.stack = error.stack || ''
    const errorDetails = {
        message: error.message,
        status: 405,
        stack: error.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>'),
    }

    return res.status(500).json({
        success: false,
        message: errorDetails,
        error: error
    })
}
