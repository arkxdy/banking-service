import { Request, Response } from "express";
const bcrypt = require('bcrypt')

import jwt from '../middlewares/verifyToken'
import { User } from "../../data/models/user.model";

const registerUser = async(req: Request, res: Response): Promise<Response> => {
    try{
        const {username, password} = req.body
        const { fullName, email, phoneNumber, dateOfBirth, address } = req.body
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new User({
            username: username,
            password: hashedPassword,
            full_name: fullName,
            email: email,
            phone_number: phoneNumber,
            date_of_birth: dateOfBirth,
            address: address
        })
        if(!newUser.validateUserData()){
            return res.status(400).json({
                success: false,
                error: 'Invalid Request'
            })
        }
        //save data in db

        const token = await jwt.generateToken(req)
        return res.status(200).json({ 
            message: 'User registered successfully' ,
            data:newUser.getUserData(),
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
        //get user from db using username password

        const token = await jwt.generateToken(req)
        return res.status(200).json({
            message: 'User logged in successfully',
            data:{
                user: username,
                pass: hashedPassword
            },
            token: token
        });
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