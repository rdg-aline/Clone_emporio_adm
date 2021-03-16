import axios from 'axios'
import Header from '../../../components/Header'
import { toast, Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import './style.css'


function CadastrarProduto() {

    const { register, handleSubmit, errors } = useForm();

    const token = localStorage.getItem('token')

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    const onSubmit = (data: any) => {

        
        const { inputTitle,inputPrice,inputDescricao,inputImagem} = data

        const post = {
            title: inputTitle,
            price: inputPrice,
            description: inputDescricao,
            image: inputImagem
        }

        axios.post("http://localhost:4000/beers", post, { headers: headers })

        toast.success('Cadastro realizado')
    }

    return (
        <div>

            <Header />

           
            <form onSubmit={handleSubmit(onSubmit)} className='FormPrincipal'>
             <h4>Cadastre o produto aqui</h4>

                <div>
                    <input
                        type="text"
                        name="inputTitle"
                        placeholder="informe o titulo"
                        ref={ register({required: 'Campo obrigatório'})}
                    />
                    {errors.inputTitle && <p>{errors.inputTitle.message}  </p>}
                </div><br/>

                <div>
                    <input
                        type="text"
                        name="inputPrice"
                        placeholder="informe o preco"
                        ref={register({ required: 'Campo obrigatório' })}
                     />
                    {errors.inputPrice && <p>{errors.inputPrice.message}  </p>}
                </div><br/>

                <div>
                    <input
                        type="text"
                        name="inputImagem"
                        placeholder="Cole a url da imagem"
                        ref={register({required: 'Campo obrigatório'  })}
                     />
                    {errors.inputImagem && <p>{errors.inputImagem.message}  </p>}
                </div><br/>


                <div>
                    <input
                        type="text"
                        name="inputDescricao"
                        placeholder="Digite uma descrição"
                        ref={ register({required: 'Campo obrigatório'})  }
                    />
                    {errors.inputDescricao && <p>{errors.inputDescricao.message}  </p>}
                </div><br/>

                <button type="submit">Cadastrar </button>
                <Toaster />
            </form>



        </div>
    )
} export default CadastrarProduto
