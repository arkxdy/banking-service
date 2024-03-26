

export interface IUser {
    _id: string
    firstName: string
    lastName: string
    email: string
    password: string
    phoneNumber: string
    verified: boolean
    createdAt: Date
    updateAt: Date
}