import { Request, Response } from "express";
const bcrypt = require('bcrypt')

import jwt from '../middlewares/verifyToken'

const registerUser = async(req: Request, res: Response): Promise<Response> => {
    try{
        const {username, password} = req.body
        const hashedPassword = await bcrypt.hash(password,10)
        req.body.password = hashedPassword
        //save
        const token = await jwt.generateToken(req)
        return res.status(201).json({ 
            message: 'User registered successfully' ,
            user: username,
            token: token
        });
    }catch(error){
        return res.status(500).json({
            success: false,
            error: 'Registration failed'
        })
    }
}


const loginUser = async(req: Request, res: Response): Promise<Response> => {
    try{
        const { username, password } = req.body
        const hashedPassword = await bcrypt.hash(password,10)
        return res.status(201).json({
            user: username,
            pass: hashedPassword
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            error: 'Login failed'
        })
    }
}

export default {
    registerUser,
    loginUser
}