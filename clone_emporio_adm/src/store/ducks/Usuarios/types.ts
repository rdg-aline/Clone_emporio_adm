export enum UserTypes {
    GET_USERS = '@GET_USERS',
    DELETE_USERS = '@DELETE_USERS'
}



export interface User {
    email: string,
    password:string,
    name: string,
    role: string,
    id:number
}


export interface stateUser {
    user:User,
    arrayUsuarios:User[]
}


