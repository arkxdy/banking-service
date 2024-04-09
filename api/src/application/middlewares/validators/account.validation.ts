import { IAccount } from "../../../data/models/account.model";

export const validateAccount = (accountData: IAccount) => {
    if(
        !Number.isNaN(accountData.customerId) &&
        !Number.isNaN(accountData.balance) &&
        (accountData.accountType !== null &&
            accountData.accountType.length > 0)
    ){
        return true;
    }
    return false;
}