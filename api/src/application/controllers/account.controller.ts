import { Request, Response } from "express";
import { pool } from "../../data/data-sources/db-datasource/dbDatasource";
import { QueryResult } from "pg";

const getAccountDetails = async (req:Request, res: Response) => {
    const accountNumber:string = req.path;
    if(validate(accountNumber)){
        const response: QueryResult = await pool.query('')
        return res.status(200).json(response);
    }
    return res.status(204).json({
        message: "Account Number is not valid"
    })
}

const validate = (accNum:string):boolean => {
    if(accNum.length>=8 && digitsOnly(accNum)){
        return true
    }
    return false
}

const digitsOnly = (str:string):boolean => [...str].every(char => '0123456789'.includes(char))


module.exports = getAccountDetails