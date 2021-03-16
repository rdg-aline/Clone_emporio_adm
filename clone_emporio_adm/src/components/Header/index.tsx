import { NavLink } from 'react-router-dom'
import './style.scss'
import { Link } from 'react-router-dom'
import Logo from '../image/logo'

const Header = () => {
  const role = localStorage.getItem('role')



  const sair = () => {
    localStorage.clear()
  }


  return (
    <>
      <header className="header">
        <div className="header-a">
          <p>
            A MAIOR <span>LOJA ESPECIALIZADA DE CERVEJA</span> DO BRASIL.
          </p>
        </div>
        <div className="header-logo container">
          <NavLink to="/home" exact>
            <Logo />
          </NavLink>
          <div className="header-sair">
            <NavLink to="/" exact>
              <p onClick={sair} > Sair </p>
            </NavLink>
          </div>
        </div>
      </header>

      {
        role === 'admin' ?
          <nav className="menu">
            <ul>
              <li> <NavLink to="/home">Home</NavLink> </li>
              <li>Usuarios
                <ul>
                  <li> <Link to="lista_usuarios"> Listar </Link> </li>
                  <li>   <Link to="cadastro_usuarios"> Cadastrar </Link>  </li>
                </ul>
              </li>

              <li>Produtos
				      	<ul>
                  <li>  <Link to="lista_produtos"> Listar </Link> </li>
                  <li> <Link to="cadastro_produtos"> Cadastrar </Link>  </li>
                </ul>
              </li>
            </ul>
          </nav>

          : role === 'editor' &&
           <div>
            <nav className="menu">
              <ul>
                <li> <NavLink to="/home">Home</NavLink> </li>
                <li>Produtos
					        <ul>
                    <li> <Link to="cadastro_produtos"> Cadastrar </Link>  </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
      }


    </>

  );
}

export default Header
