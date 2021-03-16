import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducerProdutos from './ducks/Produtos'
import reducerUsuarios from './ducks/Usuarios'

const createRootReducer = () => combineReducers({
  produtos: reducerProdutos,
  user: reducerUsuarios
})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }
