import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../components/Header'
import { FiTrash2 } from 'react-icons/fi'
import { delUser, getUser } from '../../../store/ducks/Usuarios/actions';
import {  User } from '../../../store/ducks/Usuarios/types';
import './style.scss'

function ListarUsuarios() {

  const dispatch = useDispatch()

  const { arrayUsuarios } = useSelector((state: any) => state.user)

  const token = localStorage.getItem('token')

  const headers = {
    'Authorization': `Bearer ${token}`
  }


  const showUsers = () => {
    axios.get('http://localhost:4000/users?role=admin&role=editor', { headers: headers })
      .then(resposta => dispatch(getUser(resposta.data)))
  }

  useEffect(() => {
    showUsers()
  }, [])


  const deletar = (id: any) => {
    axios.delete(`http://localhost:4000/users/${id}`, { headers: headers })
    dispatch(delUser(id))
    showUsers()

  }


  return (
    <div>

      <Header />

      <div className="usuario">
        {arrayUsuarios?.map((item: User) => (
          <div className="footer_user" key={item.id}> 
            <div className="body_user">
              <p>{item.name}</p>
             
              <p> {item.role}</p>
              <FiTrash2 onClick={() => deletar(item.id)} />
            </div>
          </div>
         ))}
      </div>




    </div>
  );
}
export default ListarUsuarios
