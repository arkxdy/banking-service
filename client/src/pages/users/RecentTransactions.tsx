import iconATM from '../../images/debit-card-svgrepo-com.svg'
const RecentTransactions = () => {
    const tmep = [
        {name:'Aditya', time: '08:20pm', type:'Sending', balance: 94.00, debit: false},
        {name:'Xasdg', time: '08:20pm', type:'Stream', balance: 84.00, debit: false},
        {name:'Qwertwre', time: '08:20pm', type:'Food', balance: 294.00, debit: true},
        {name:'Rahul', time: '08:20pm', type:'Sending', balance: 940.00, debit: false},
    ]
    return(
        <div className="flex flex-col w-full">
        <div className='grid grid-cols-2 gap-4'>
            <div className="font-bold text-xl">Recent transactions</div>
            <div className="font-bold text-xl text-gray-400 cursor-pointer hover:text-black">See all</div>
        </div> 
        <div className='grid grid-cols-2 gap-4'>
            {tmep.map((item,index)=>(
                <>
                    <div key={index} className="flex flex-row">
                        <img className="w-5 mr-2" src={iconATM}></img>
                        <div>
                            <div className='font-semibold'>{item.name}</div>
                            <div className='font-semibold text-gray-400 text-xs'>{item.type}</div>
                        </div>
                    </div>
                    <div className='ml-12 w-20'>
                        <div className='font-semibold'>{item.debit ? '+$ ': '-$ '}{item.balance}</div>
                    </div>
                </>
                
            ))}
            <div>
            
            </div>
        </div>
        </div>
    )
}

export default RecentTransactions;