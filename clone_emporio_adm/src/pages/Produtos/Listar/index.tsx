import { useEffect } from 'react';
import axios from 'axios';
import { Produto } from '../../../store/ducks/Produtos/types';
import { useDispatch, useSelector } from 'react-redux';
import { delProdutos, getProdutos } from '../../../store/ducks/Produtos/actions';
import Header from '../../../components/Header'
import { FiTrash2 } from 'react-icons/fi'
import './style.scss'

function ListarProdutos() {

  const dispatch = useDispatch()

  const { arrayProdutos } = useSelector((state: any) => state.produtos)

  const token = localStorage.getItem('token')

  const headers = {
    'Authorization': `Bearer ${token}`
  }


  const showProducts = () => {
    axios.get('http://localhost:4000/beers', { headers: headers })
      .then(resposta => dispatch(getProdutos(resposta.data)))
  }

  useEffect(() => {
    showProducts()
  }, [])


  const deletar = (id: any) => {
    axios.delete(`http://localhost:4000/beers/${id}`, { headers: headers })
    dispatch(delProdutos(id))
    showProducts()

  }

  return (
    <div>
      <Header />
        <div className="produto">
          {arrayProdutos?.map((item: Produto) => (
            <div className="footer_produto" key={item.id}>
             <div className="body_produto">
               <p>{item.title}</p>
               <p>{item.price}</p>
               <FiTrash2 onClick={() => deletar(item.id)} />
              </div>
            </div>
          ))}
        </div>

    </div>
  );
}
export default ListarProdutos
