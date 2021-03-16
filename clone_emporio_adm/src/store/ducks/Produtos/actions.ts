import { action } from 'typesafe-actions'
import { Produto, ProductTypes } from './types'

export const getProdutos = (payload: Produto) => action(ProductTypes.GET_PRODUTOS, payload)

export const delProdutos = (id: Number) => action(ProductTypes.DELETE_PRODUTOS,{id})

