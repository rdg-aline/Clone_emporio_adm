import { User, UserTypes } from './types'


const initialState = {
    id: 0,
    role: "",
    arrayUsuarios: []
}



function reducerUsuarios(state = initialState, action: any) {
    const usuario: any = state.arrayUsuarios
    switch (action.type) {
        case UserTypes.GET_USERS:
            return {
                id: action.payload.id,
                role: action.payload.role,
                arrayUsuarios: action.payload
            }
        case UserTypes.DELETE_USERS:
            usuario.map((item: User, index: number) => {
                if (item.id === action.payload.id) {
                    usuario.splice(index, 1)
                }
            })
            return {
                arrayUsuarios: usuario
            }
        default:
            return state
    }

} export default reducerUsuarios


