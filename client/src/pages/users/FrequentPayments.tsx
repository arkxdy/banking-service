const FrequentPayments = () => {
    const ar = [30.00, 6.00, 4.99]
    return(
        <div className="flex flex-col">
            <div className="flex flex-row justify-between">
                <span className="text-xl font-bold">Frequent payments</span>
                <span className="text-gray-400 font-bold">See all</span>
            </div>
            <div className="flex flex-row justify-between">
                {ar.map(item => (
                    <Box amount={item} name="Netflix"></Box>
                ))}
            </div>
        </div>
    )
}

export default FrequentPayments;

const Box = (data:IBox) => {
    return (
        <>
            <div className="flex flex-row border-2 rounded m-4 pl-6 pr-6 flex-wrap">
                <div>{data.icon}</div>
                <div className="flex flex-col font-bold">
                    <label>Rs. {data.amount}</label>
                    <label className="text-gray-400">{data.name}</label>
                </div>
            </div>
        </>
    )
}

type IBox = {
    icon?: string,
    amount: number,
    name: string
}