import { useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getProdutos } from '../../store/ducks/Produtos/actions';
import { getUser } from '../../store/ducks/Usuarios/actions';
import './style.scss'

function Home() {

  const dispatch = useDispatch()

  const { arrayUsuarios } = useSelector((state: any) => state.user)
  const { arrayProdutos } = useSelector((state: any) => state.produtos)

  const token = localStorage.getItem('token')

  const headers = {
    'Authorization': `Bearer ${token}`
  }

  useEffect(() => {

    axios.get('http://localhost:4000/users?role=admin&role=editor', { headers: headers })
      .then(resposta => { dispatch(getUser(resposta.data)) })

    axios.get('http://localhost:4000/beers', { headers: headers })
      .then(resposta => { dispatch(getProdutos(resposta.data)) })

  }, [])


  return (
    <div>
      <Helmet>Home </Helmet>

      <Header />
      <div className='BlocoPrincipal'>
        <div className='bloco'>
          <p>Número de usuarios  <p>{arrayUsuarios.length}</p></p>
        </div>

        <div className='bloco'>
          <p>Número de produtos <p> {arrayProdutos.length}</p></p>
        </div>
      </div>

    </div>

  )
} export default Home
