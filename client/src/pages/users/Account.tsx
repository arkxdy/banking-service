import { useState } from "react";
import { useAuthContext } from "../../context/authContext";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

interface Account {
  id: number;
  accountNumber: string;
  balance: number;
}

interface Props {
  accounts: Account[];
}



const Account = () => {
  const { authState } = useAuthContext()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
    console.log(authState)
  return (
    <>
      <div className="flex">
      <Sidebar></Sidebar>
      <Dashboard></Dashboard>
      </div>
    </>
  )
}
export default Account;



