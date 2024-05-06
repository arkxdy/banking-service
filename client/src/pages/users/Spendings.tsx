import { useState } from "react"

const Spendings = () => {
    const ar = [28,40,8,52,96,80,13, 66]
    const max = ar.reduce((item, max) => {
        max = Math.max(max, item)
        return max
    },0)

    const spendRow:number[] = []
    for(let i=1; i<4; i++){
        spendRow.push(max/i)
    }
    spendRow.push(0)

    const spendingTypesInitial: ISpendingType[] = [{name: 'Day'},
        {name: 'Week'}, {name: 'Month', active: true}, {name: 'Year'}, {name: '...'}
    ]
    const [spendingTypes, setSpendingTypes] = useState<ISpendingType[]>(spendingTypesInitial)
    const handleSpending = (e:React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const selectedValue:string = (e.currentTarget.dataset.id) ?? 'Month'
        const getSpendingType = spendingTypesInitial.map((item) => {
            let temp: ISpendingType = {name: item.name}
            if(item.name===selectedValue){
                temp.active = true
                return temp
            }
            temp.active = false
            return temp
        })
        setSpendingTypes(getSpendingType)
    }
    return (
        <>
            <div className="flex flex-col">
                <div className="grid grid-cols-2 gap-4">
                    <div className="ml-4 font-bold text-xl">
                        My spending
                    </div>
                    <div className="flex flex-row justify-end font-semibold cursor-pointer">
                        {spendingTypes.map((item) => {
                            const classStyle = item.active === true ? 'list-none mr-8 text-gray-700' : `list-none mr-8 text-gray-400 hover:text-gray-700`
                            return <li data-id={item.name} onClick={(e)=>handleSpending(e)} className={classStyle} key={item.name}>{item.name}</li>
                        })}
                    </div>
                </div>
                <div className="">
                    <div>
                        <div className="flex flex-row space-x-2 h-80 items-end justify-center">
                            <div className="mb-3 space-y-16">
                                {spendRow.map((item) => (
                                    <li key={item} className="list-none font-semibold text-gray-400">{item}</li>
                                ))}
                            </div>
                            {ar.map((item,index)=>(
                                <VerticalBar key={index} month="Apr" height={(item*80)/max} amount={90}></VerticalBar>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Spendings

const VerticalBar = (props:{month: string, height:number, amount: number}) => {
    const classStyle: string = `items-end flex justify-center w-10 bg-black rounded overflow-hidden dark:bg-gray text-gray-200 hover:bg-gradient-to-r from-[rgba(224,255,0)] to-[rgba(155,255,0)] hover:text-gray-700`
    const [showDialog, setShowDialog] = useState<boolean>(false)
    return(
      <div className="flex flex-col h-80 font-semibold justify-end items-center w-16">
        {showDialog && <span className="flex w-16 h-10 mb-4 rounded shadow-md items-center justify-center">${props.amount}</span>}
        <div onMouseEnter={() => setShowDialog(true)} onMouseLeave={() => setShowDialog(false)} 
        className={classStyle} style={{height: `${props.height}%`}}></div>
        <span className="text-gray-400">{props.month}</span>
      </div>
    )
}


type ISpendingType = {
    name: string,
    active?: boolean
}