import { QueryResult } from "pg";
import { IUser } from "../../../data/models/user.model";

export function validateUserList (res: QueryResult) {
    const list = res.rows;
    const isValid:boolean = list.map((item) => validateUserData(item)).reduce((item,val)=>item&&val)
    
    return isValid
}
function validateUserData ( res:IUser ): boolean{
    if(
        res.user_id !== undefined &&
        res.username !== undefined &&
        res.password !== undefined &&
        res.full_name !== undefined &&
        res.email !== undefined &&
        res.phone_number !== undefined &&
        res.date_of_birth !== undefined &&
        res.address !== undefined
    ){
        return true
    }
    return false
}