class Transaction {
    #transactionId;
    #customerId;
    #accoundId;
    #type;
    #amount;
    #date;

    constructor (transactionData: ITransaction) {
        this.#transactionId = transactionData.transactionId,
        this.#customerId = transactionData.customerId,
        this.#accoundId = transactionData.accountId,
        this.#type = transactionData.type,
        this.#amount = transactionData.amount,
        this.#date = transactionData.date
    }

    getTransactionData (): ITransaction {
        return {
            transactionId: this.#transactionId,
            customerId: this.#customerId,
            accountId: this.#accoundId,
            type: (this.#type!=='credit' && this.#type!=='debit')?'invalid': this.#type,
            amount: this.#amount,
            date: this.#date
        }
    }

}

type ITransaction = {
    transactionId: number,
    customerId: number,
    accountId: number,
    type: 'debit' | 'credit' | 'invalid',
    amount: number,
    date: Date
}

