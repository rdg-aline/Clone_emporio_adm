import { Produto, ProductTypes } from './types'


const initialState = {
    arrayProdutos:[]
}


function reducerProdutos(state = initialState, action: any) {
    
    const produto: any = state.arrayProdutos

    switch (action.type) {
        case ProductTypes.GET_PRODUTOS:
            return {
                arrayProdutos:action.payload
            }
        case ProductTypes.DELETE_PRODUTOS:
            produto.map((item: Produto, index: number) => {
                if(item.id === action.payload.id){
                  produto.splice(index, 1)
                }
              })
              return {
                arrayProdutos: produto
              }

        default:
            return state
    }

} export default reducerProdutos


   