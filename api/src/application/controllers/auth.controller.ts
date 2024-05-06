import { Request, Response } from "express";
const bcrypt = require('bcrypt')


const registerUser = async(req: Request, res: Response): Promise<Response> => {
    try{
        const {username, password} = req.body
        const hashedPassword = await bcrypt.hash(password,10)
        //save
        return res.status(201).json({ message: 'User registered successfully' });
    }catch(error){
        return res.status(500).json({
            error: 'Registration failed'
        })
    }
}