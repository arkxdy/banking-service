import {Request, Response} from 'express';
import { QueryResult } from 'pg';
import { pool } from '../../data/data-sources/db-datasource/dbDatasource';
import { IUser, getUserListData } from '../../data/models/user.model';
import { validateUserList } from '../middlewares/validators/user.validation';


export const getUsersList = async (_req: Request, res: Response):Promise<Response> => {
    try{
        let response: QueryResult;
        let query: string = 'select * from users';
        response = await pool.query(query)
        if(validateUserList(response)){
            
            //const list: IUser[] = 

            return res.status(200).json(getUserListData(response.rows))
        }else{
            return res.status(200).json(response.rows)
        }
        
        // const orderBy = req.query.order;
        // const desc = req.query.desc;
        // if(orderBy!==undefined && typeof (orderBy)==='string' && usersKey.has(orderBy.toLowerCase())){
        //     if(desc==='true'){
        //         query = `select * from users order by ${orderBy} desc`
        //     }else{
        //         query = `select * from users order by ${orderBy}`
        //     }
        //     response = await pool.query(query)
        //     return res.status(200).json(response.rows)
        // }else{
        //     res.header('Sorting','Column does not match')
        //     response = await pool.query(query);
        //     return res.status(200).json(response.rows)
        // }
    }catch(error){
        return res.status(500).json({
            success:false,
            message:'Cannot get users',
            error: error
        })
    }
    
}

export const createUser = async (req:Request, res:Response):Promise<Response> => {
    const userData: IUser = req.body;
    // await pool.query(`insert into users (username,password,full_name,email,phone_number,date_of_birth, address) 
    // values (${userData.username})`)
    return res.status(202).json({id:userData.user_id,dob:userData.date_of_birth})
}
