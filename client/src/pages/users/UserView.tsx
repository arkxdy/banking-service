import { useState } from "react";
import useGetUserDetails from "../../hooks/useGetUserDetails";
import { IUser } from "../../utils/types";

const UserView = (user:IUser) => {
    const [loading, setLoading] = useState<boolean>()
    const [error, setError] = useState<boolean>()

    const getUserDetails:Promise<any> = useGetUserDetails(user)

    return(
        <>
            User
            <div className="flex space-x-4">
            <VerticalBar month="Apr" height={32}/>
            <VerticalBar month="Apr" height={32}/>
            <VerticalBar month="Apr" height={32}/>
            </div>
        </>
    )
}
export default UserView;

const VerticalBar = (props:{month: string, height:number, color?:string}) => {
    const textColor = props.color !== undefined ? 'white' : 'gray-600'
    const bgColor = props.color ?? 'gray-200'
    const classStyle = `font-semibold flex flex-col flex-nowrap justify-end w-10 h-${props.height} bg-${bgColor} text-center rounded overflow-hidden dark:bg-${bgColor} text-${textColor}`
    return(
      <>
        <div className={classStyle}>{props.month}</div>
      </>
    )
  }