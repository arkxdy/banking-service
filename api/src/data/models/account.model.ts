class Account {
    #accountId;
    #customerId;
    #accountType;
    #balance;
    #openingData;

    constructor (accountData: IAccount){
        this.#accountId = accountData.accountId,
        this.#customerId = accountData.customerId,
        this.#accountType = accountData.accountType,
        this.#balance = accountData.balance,
        this.#openingData = accountData.openingData
    }

    getAccountData (): IAccount{
        return {
            accountId: this.#accountId,
            customerId: this.#customerId,
            accountType: this.#accountType,
            balance: this.#balance,
            openingData: this.#openingData
        }
    }
}

export type IAccount = {
    accountId: number,
    customerId: number,
    accountType: string,
    balance: number,
    openingData: Date
}

