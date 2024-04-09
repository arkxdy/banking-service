import { Request, Response } from "express";

const getTransactionHistory = async (req: Request, res: Response): Promise<Response> => {
    try{
        console.log()
        return res.status(200)
    }catch(error){
        return res.status(500).json({
            success: false,
            message: 'Cannot retrieve transaction history',
            error: error
        })
    }
}
