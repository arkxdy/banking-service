import { QueryResult } from "pg";
import { IUser } from "../../../data/models/user.model";

export function validateUserList (res: QueryResult) {
    const list = res.rows;
    const isValid:boolean = list.map((item) => validateUserData(item)).reduce((item,val)=>item&&val)
    
    return isValid
}
function validateUserData ( res:IUser ): boolean{
    if(
        res.user_id !== null &&
        res.username !== null &&
        res.password !== null &&
        res.full_name !== null &&
        res.email !== null &&
        res.phone_number !== null &&
        res.date_of_birth !== null &&
        res.address !== null
    ){
        return true
    }
    return false
}