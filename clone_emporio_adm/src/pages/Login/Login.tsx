import axios from 'axios';
import  { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import { decodeToken } from 'react-jwt'
import { useDispatch } from 'react-redux';
import { getUser } from '../../store/ducks/Usuarios/actions';
import './style.css'

function Login() {

    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch()
    const [logado, setLogado] = useState<Boolean>(false)


    async function onSubmit(data: any) {

        let user: any = {}

        const { emailInput, senhaInput } = data

        const requisicao = {
            email: emailInput,
            password: senhaInput
        }

        await axios.post("http://localhost:4000/login", requisicao)
            .then(resposta => {
                user = decodeToken(resposta.data.accessToken)
                localStorage.setItem('token', resposta.data.accessToken)

            })


        axios.get(`http://localhost:4000/users/${user?.sub}`)
            .then(resposta => {
                dispatch(getUser(resposta.data))
                localStorage.setItem('role',resposta.data.role) 
                setLogado(true)
            })


    }

    return (
        <div>
            <Helmet>Entrar</Helmet>

                     

            <form onSubmit={handleSubmit(onSubmit)} className="Form">
             <h4> Faça o login </h4>
             
                <div className="FormLogin">
                    <div>
                    <input
                        type="text"
                        name="emailInput"
                        placeholder="digite seu email"
                        ref={
                            register({
                                required: 'Campo obrigatório',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "E-mail inválido"
                                }
                            })
                        }
                    />
                    {errors.emailInput && <p>{errors.emailInput.message}  </p>}
                </div>

                <div>
                    <input
                        type="password"
                        name="senhaInput"
                        placeholder="digite sua senha"
                        ref={
                            register({
                                required: 'Campo obrigatório',
                                minLength: {
                                    value: 6,
                                    message: "Senha deve conter 6 digitos"
                                }
                            })
                        }
                    />
                    {errors.senhaInput && <p>{errors.senhaInput.message}  </p>}
                </div>

                <button type="submit"> Entrar </button>

                { logado === true  && <Redirect to="/home"  />}

                </div>
            </form>
        </div>
    )
} export default Login
