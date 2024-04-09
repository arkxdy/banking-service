class User{
    #user_id:number;
    #username:string;
    #password:string;
    #full_name:string;
    #email:string;
    #phone_number:string;
    #date_of_birth:Date;
    #address:string;

    constructor (userData:IUser){
        this.#user_id = userData.user_id,
        this.#username = userData.username,
        this.#password = userData.password,
        this.#full_name = userData.full_name,
        this.#email = userData.email,
        this.#phone_number = userData.phone_number,
        this.#date_of_birth = userData.date_of_birth,
        this.#address = userData.address
    }

    getUserData():IGetUser{
        return {
            user_id: this.#user_id,
            full_name: this.#full_name,
            email: this.#email,
            phone_number: this.#phone_number,
            date_of_birth: this.#date_of_birth,
            address: this.#address
        }
    }
    getUserSensitiveData():IUser{
        return {
            user_id: this.#user_id,
            username: this.#username,
            password: this.#password,
            full_name: this.#full_name,
            email: this.#email,
            phone_number: this.#phone_number,
            date_of_birth: this.#date_of_birth,
            address: this.#address
        }
    }

}

export function getUserListData (list:Array<IUser>):Array<IGetUser> {
    return list.map((item) => {
        const user = new User(item);
        return (user.getUserData())
    })
}
export function getUserData (item: IUser) {
    const user = new User(item)
    return user.getUserData()
}
export interface IUser {
    user_id:number,
    username:string,
    password:string,
    full_name:string,
    email:string,
    phone_number:string,
    date_of_birth: Date,
    address:string
}

export interface IGetUser {
    user_id:number,
    full_name:string,
    email:string,
    phone_number:string,
    date_of_birth: Date,
    address:string
}