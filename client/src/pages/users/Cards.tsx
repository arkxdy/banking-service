import { useState } from "react";
const Cards = () => {
    const cardsInfo: ICardDetails = 
        {name:'Aditya Kr Rahul', accountNumber:1234432398765432, expire:'12/27', cvv: 321, amount: 20000}
    
    
    return(
        <div className="flex flex-col">
            <div className="flex flex-row items-center mb-4">
                <div className="font-bold text-xl">Your cards</div>
                <div className="w-1/2 font-bold text-gray-400 hover:text-black text-right">Add card</div>
            </div>
            <div className=''>
            <CardDetail key={cardsInfo.accountNumber} data={cardsInfo} color=""></CardDetail>
            </div>
            <div></div>
        </div>
    )
}

export default Cards;


const CardDetail = (props:{data: ICardDetails, color: string}) => {
    const accountNumber = ('**** '+props.data.accountNumber.toString().slice(props.data.accountNumber.toString().length-4, props.data.accountNumber.toString().length))
    console.log(accountNumber)
    const [showBack, setShowBack] = useState<boolean>(false)
    return(
        <div className='flex flex-col justify-around bg-[url("src/images/black-card.png")] w-64 h-40 rounded-xl text-gray-400 pl-4 pt-3 pr-2 font-bold'>
            {!showBack && <><div className="flex flex-row justify-between">
                <div className="">{props.data.name}</div>
                <div className="cursor-pointer" onClick={()=>setShowBack(true)}>...</div>
            </div><div className="flex flex-row justify-between text-white">
                    <div>Rs. {props.data.amount}</div>
                    <div></div>
                </div><div className="flex flex-row justify-between text-white text-xs">
                    <div>{accountNumber}</div>
                    <div>{props.data.expire}</div>
                    <div></div>
                </div></>}
            {showBack && <><div className="flex flex-row justify-between">
                <div className="">{props.data.name}</div>
                <div className="cursor-pointer" onClick={()=>setShowBack(false)}>...</div>
            </div>
            <div className="flex flex-row justify-between text-white">
                <div>{props.data.accountNumber}</div>
                <div></div>
            </div>
            <div className="flex flex-row justify-between text-white text-xs">
                <div>{props.data.cvv}</div>
                <div>{props.data.expire}</div>
                <div></div>
            </div></>}
        </div>
    )
}

type ICardDetails = {
    name: string,
    accountNumber: number,
    expire: string,
    cvv: number,
    amount: number
}