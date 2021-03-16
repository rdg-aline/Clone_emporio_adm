import { Switch, Route } from 'react-router-dom';
import Auth from '../components/Auth';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import ListarProdutos from '../pages/Produtos/Listar';
import CadastrarProduto from '../pages/Produtos/Cadastrar';
import ListarUsuarios from '../pages/Usuarios/Listar';
import CadastrarUsuario from '../pages/Usuarios/Cadastrar';



function Rotas() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Auth path="/home" exact component={Home} />
            <Auth path="/lista_produtos" exact component={ListarProdutos} />
            <Auth path="/cadastro_produtos" exact component={CadastrarProduto} />
            <Auth path="/lista_usuarios" exact component={ListarUsuarios} />
            <Auth path="/cadastro_usuarios" exact component={CadastrarUsuario} />
          </Switch>
    )
}

export default Rotas
