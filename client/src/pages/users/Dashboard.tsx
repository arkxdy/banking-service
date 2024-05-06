import Cards from "./Cards";
import FrequentPayments from "./FrequentPayments";
import Overview from "./Overview";
import QuickTransfer from "./QuickTransfer";
import RecentTransactions from "./RecentTransactions";
import Spendings from "./Spendings";

const Dashboard = () => {
    return(
        <>
        <div className="h-screen" style={{width: '90%'}}>
            <div className="p-4 border-0 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <div className="flex items-center justify-center h-32 mb-4 rounded items-end">
                    <Overview></Overview>
                </div>
                <div className="grid grid-row-2 grid-flow-col gap-4 mb-6">
                    <div className="row-span-3 flex items-center justify-center h-96 rounded"><Cards></Cards></div>
                    <div className="col-span-2 flex items-center justify-center h-48 rounded"><QuickTransfer></QuickTransfer></div>
                    <div className="col-span-2 flex items-center justify-center h-48 rounded"><FrequentPayments></FrequentPayments></div>
                </div>
                <div className="grid grid-col-2 grid-flow-col gap-4">
                    <div className="flex items-center justify-center h-96 rounded w-full">
                        <RecentTransactions></RecentTransactions>
                    </div>
                    <div className="flex items-center justify-center h-96 rounded w-full">
                        <Spendings></Spendings>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Dashboard;