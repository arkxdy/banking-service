import { Request } from "express"

export type IPostgreConn = {
    user: string,
    host: string,
    password: string,
    database: string,
    port: number
}

export const usersKey = new Set(['id', 'username',"full_name","email"
,"phone_number","data_of_birth",'address'])

export interface IPermissionRequest extends Request{
    role: string,
} 