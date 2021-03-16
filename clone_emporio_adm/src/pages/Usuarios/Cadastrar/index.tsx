import axios from 'axios'
import Header from '../../../components/Header'
import { toast, Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import './style.css'

function CadastrarUsuario() {

    const { register, handleSubmit, errors } = useForm();

    const token = localStorage.getItem('token')

    const headers = {
        'Authorization': `Bearer ${token}`
    }



    const onSubmit = (data: any) => {

        const { inputEmail, inputSenha, inputNome, inputRole } = data

        const post = {
            email: inputEmail,
            password: inputSenha,
            name: inputNome,
            role: inputRole,
        }


        axios.post("http://localhost:4000/users", post, { headers: headers })

        toast.success('Cadastro realizado')

    }



    return (
        <div>

            <Header />
        
            <form onSubmit={handleSubmit(onSubmit)} className='FormPrincipal'>
              <h4>Cadastre o usuario aqui</h4>
                <div>
                    <input
                        type="text"
                        name="inputEmail"
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
                    {errors.inputEmail && <p>{errors.inputEmail.message}  </p>}
                </div><br/>

                <div>
                    <input
                        type="password"
                        name="inputSenha"
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
                    {errors.inputSenha && <p>{errors.inputSenha.message}  </p>}
                </div><br/>

                <div>
                    <input
                        type="text"
                        name="inputNome"
                        placeholder="digite seu nome"
                        ref={
                            register({
                                required: 'Campo obrigatório',

                            })
                        }
                    />
                    {errors.inputNome && <p>{errors.inputNome.message}  </p>}
                </div><br/>


                <div>
                    <input
                        type="text"
                        name="inputRole"
                        placeholder="Informe: editor ou admin"
                        ref={
                            register({
                                required: 'Campo obrigatório',

                            })
                        }
                    />
                    {errors.inputRole && <p>{errors.inputRole.message}  </p>}
                </div><br/>

                <button type="submit"> Cadastrar </button>
                <Toaster />



            </form>


        </div>
    )
} export default CadastrarUsuario
