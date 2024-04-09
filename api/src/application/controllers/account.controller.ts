import { Request, Response } from "express";
import { pool } from "../../data/data-sources/db-datasource/dbDatasource";
import { QueryResult } from "pg";
import { validateAccount } from "../middlewares/validators/account.validation";
import { IAccount } from "../../data/models/account.model";

const getAccountDetail = async (req:Request, res: Response):Promise<Response> => {
    try{
        const accountNumber:string = req.params.id;
        if(validate(accountNumber)){
            const response: QueryResult = await pool.query(`select * from accounts where account_id = ${accountNumber} limit 1`)
            if(response.rowCount===1){
                return res.status(200).json(response.rows);
            }
            return res.status(404).json({
                success: true,
                message: 'Cannot find account'
            })
        }
        return res.status(204).json({
            message: "Account Number is not valid"
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: 'Cannot get account',
            error: error
        })
    }
}

const validate = (accNum:string):boolean => {
    if(accNum.length>=0 && !Number.isNaN(accNum)){
        return true
    }
    return false
}


const createAccountDetail = async (req: Request, res: Response): Promise<Response> => {
    try{
        const accData: IAccount = req.body;
        if(validateAccount(accData)){
            const query = `insert into accounts( customer_id, account_type, balance) 
                values (${accData.customerId}, '${accData.accountType}', ${accData.balance})
                returning account_id`
            const response = await pool.query(query)
                return res.status(200).json(response.rows)
        }
        return res.status(204).json({
            message: 'Data is not valid'
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: 'Cannot create account',
            error: error
        })
    }
}

const deleteAccountDetail = async (req: Request, res: Response):Promise<Response> => {
    try{
        const accountNumber:string = req.params.id;
    if(validate(accountNumber)){
        const response: QueryResult = await pool.query(`delete from accounts where account_id = ${accountNumber}`)
        if(response.rowCount===1){
            return res.status(200).json({
                success: true,
                message: 'Account deleted successfully'
            });
        }
        return res.status(404).json({
            success: true,
            message: 'Cannot find account'
        })
    }
    return res.status(204).json({
        message: "Account Number is not valid"
    })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: 'Cannot delete account',
            error: error
        })
    }
}


export default { 
    getAccountDetail,
    createAccountDetail,
    deleteAccountDetail
}