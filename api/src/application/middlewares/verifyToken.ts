import { NextFunction, Request, Response } from "express";
const jwt = require('jsonwebtoken')
require('dotenv').config();

const jwtSecretKey = process.env.JWT_SECRET_KEY
const generateToken = async (req: Request, res: Response): Promise<Response> => {
    
    const data = {
        time: Date(),
        userId: 12
    }

    const token = jwt.sign(data, jwtSecretKey)

    return res.status(200).json(token)
}

//const validateToken = async (req:)
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token:string | undefined = req.header('Authorization');
    if(!token) return res.status(401).json({
        error: 'Access denied'
    })
    try{
        const decoded = jwt.verify(token, jwtSecretKey)
        //req.userId = decoded.userId
        next()
    } catch(error){
        return res.status(401).json({error: 'Invalid toekn'})
    }
}