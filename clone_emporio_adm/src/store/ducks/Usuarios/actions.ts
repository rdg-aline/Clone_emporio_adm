import { action } from 'typesafe-actions'
import { UserTypes, User } from './types'


export const getUser = (payload: User) => action(UserTypes.GET_USERS, payload)

export const delUser = (id: Number) => action(UserTypes.DELETE_USERS,{id})

