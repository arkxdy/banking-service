import { useState } from "react";

const QuickTransfer = () => {
    const paymentMode: IPaymentMode[] = [
        {type: 'Card', placeholder: 'Enter the card number', active: true},
        {type: 'Phone', placeholder: 'Enter the phone number', active: false},
        {type: 'UPI', placeholder: 'Enter the UPI Id', active: false},
        {type: 'Account', placeholder: 'Enter the account number', active: false},
    ]
    const [activePaymentMode, setActivePaymentMode] = useState<IPaymentMode[]>(paymentMode)
    const [selectedPayemntMode, setSelectedPaymentMode] = useState<IPaymentMode>(paymentMode[0])
    const handlePaymentMode = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const selectedMode: string = (e.currentTarget.dataset.id) ?? 'Card'
        const temp = activePaymentMode.map((item) => {
            if(item.type===selectedMode){
                item.active = true
                setSelectedPaymentMode(item)
            }else{
                item.active = false
            }
            return item
        })
        setActivePaymentMode(temp)
    }

    return(
        <div>
            <div className="flex">
                <div className="w-1/2 gap-2 text-xl font-bold">Quick transfer</div>
                <div className="w-1/2 justify-end flex flex-row gap-2 font-bold">
                    {activePaymentMode.map(item => {
                        const classStyle:string = item.active ? 'cursor-pointer' : 'text-gray-400 cursor-pointer'
                        return <div data-id={item.type} onClick={(e)=>handlePaymentMode(e)} className={classStyle} key={item.type}>{item.type}</div>
                    })}
                </div>
            </div>
            <div className="mt-4">
                <TransferMode type={selectedPayemntMode.type} placeholder={selectedPayemntMode.placeholder}></TransferMode>
            </div>
        </div>
    )
}

export default QuickTransfer;

const TransferMode = (data:IPaymentMode) => {
    const [receiverDetail, setReceiverDetail] = useState<string>()
    const [amount, setAmount] = useState<string>()
    return(
        <div className="flex flex-row gap-4">
            <input value={receiverDetail} placeholder={data.placeholder}
            onChange={(e) => setReceiverDetail(e.target.value)}
            className="border-2 rounded p-2"
            ></input>
            <input type='number' value={amount} placeholder="Enter the amount"
            onChange={(e) => setAmount((e.target.value))}
            className="border-2 rounded p-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            ></input>
        <button className="bg-gradient-to-r from-[rgba(224,255,0)] to-[rgba(155,255,0)] p-3 rounded"><img className="w-5" src='/src/images/right-arrow_59209.png'></img></button>
        </div>
    )
}


type IPaymentMode = {
    type: string,
    placeholder: string,
    active?: boolean
}