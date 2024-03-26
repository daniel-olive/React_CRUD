import '../../App.css';
import { Loading } from '../../components/Loading/index';
import { useCatalogo } from '../../utils/query';
import { useAddMutation, useDeleteMutation } from '../../utils/Mutations';
import { useState } from 'react';
import { Card } from '../../components/Card/Card';
import { Header } from '../../components/Header/Header';

export const Home = () => {
    const [nome, setNome] = useState('')
    const catalogo = useCatalogo();//Mutation de GET
    const mutateDelete = useDeleteMutation();//Mutation de DELETE
    const mutateAdd = useAddMutation()//Mutation de POST
    const [msgSucess, setMsgSucess] = useState(false);
    const [msgErro, setMsgErro] = useState(false);
    const [validationInput, setValidationInput] = useState(false)

    const handleAdd = async () => {
        if (nome.length >= 1) {
            const data = { nome }
            await mutateAdd.mutate(data, {
                onSuccess: () => {
                    setMsgSucess(true)

                    setTimeout(() => {
                        setMsgSucess(false)
                    }, 5000)
                }
            })
            setNome('')
            setValidationInput(false)
        } else {
            setValidationInput(true)
        }
    };

    const handleDeleteItem = async (id) => {
        await mutateDelete.mutate(id, {
            onSuccess: () => {
                setMsgErro(true)
                setTimeout(() => {
                    setMsgErro(false)
                }, 5000)
            }
        })
    }

    return (
        <div>
            <Header />
            {msgSucess &&
                <p className='success'>Adicionado com Sucesso!</p>
            }
            {msgErro &&
                <p className='error'>Excluido com Sucesso!</p>
            }
            <div>
                <div>
                    <input
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Digite aqui...."

                    />
                    <button onClick={handleAdd}>Adicionar</button>
                </div>
                {validationInput && (<p className='campoVazio'>*Campo obrigatorio! </p>)}

            </div>
            {catalogo.isLoading ?

                (<Loading />)
                :
                (<div>
                    {catalogo.data.map((item) => (
                        <Card key={item.id} item={item} OnDelete={() => handleDeleteItem(item.id)} />
                    ))}
                </div>)
            }
            {catalogo.isError && <div>"Ops algo deu errado, por favor recarregue a página"</div>}
        </div>
    );
};
