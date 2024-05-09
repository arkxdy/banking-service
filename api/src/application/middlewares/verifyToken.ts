import { NextFunction, Request, Response } from "express";
const jwt = require('jsonwebtoken')
require('dotenv').config();

const jwtSecretKey = process.env.JWT_SECRET_KEY
const generateToken = async (req: Request, _res?: Response): Promise<string> => {
    
    const {username, password} = req.body
    const token = jwt.sign({username: username, password: password}, jwtSecretKey)

    return token;
}

//const validateToken = async (req:)
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token:string | undefined = req.header('Authorization');
    if(!token) return res.status(401).json({
        error: 'Access denied'
    })
    try{
        const decoded = jwt.verify(token, jwtSecretKey)
        req.body.userId = decoded.userId
        next()
    } catch(error){
        return res.status(401).json({error: 'Invalid toekn'})
    }
}

export default {
    generateToken,
    verifyToken
}