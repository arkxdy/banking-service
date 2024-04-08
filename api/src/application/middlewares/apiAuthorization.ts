import { NextFunction, Request, Response } from "express";

const roles:any = {
    owner: ['create', 'read', 'update', 'delete', 'download', 'upload'],
    admin: ['admin', 'create', 'read', 'update', 'delete', 'download', 'upload'],
    manager: ['create', 'read', 'update', 'delete', 'download', 'upload'],
    employee: ['create', 'read', 'update', 'download', 'upload'],
    staff: ['create', 'read', 'update', 'download', 'upload'],
    create_only: ['create', 'read', 'download', 'upload'],
    read_only: ['read', 'download'],
  };
  exports.roles = roles;

  exports.validateApi = ( role:string = 'none') => {
    console.log('inside validateApi',role)
    return function (_req: Request, res: Response, next: NextFunction) {
        const currentUserRole:string = "admin"
        if(roles[currentUserRole]?.includes(role)){
            console.log('calling next')
            next();
        }else{
            console.log('calling err')
            return res.status(403).json({
                success: false,
                message: 'Access denied'
            })
        }
    }
  }