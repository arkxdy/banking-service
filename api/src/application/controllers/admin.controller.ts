import { Request, Response } from "express";
import { pool } from "../../data/data-sources/db-datasource/dbDatasource";
import { error } from "console";

const getAdminList = async (req:Request, res:Response):Promise<Response> => {
    try{
        let response = pool.query('select * from admin');
    }catch(error){

    }
    return res.json(500).json({
        success: false,
        message: 'Err',
        error: error
    });
}