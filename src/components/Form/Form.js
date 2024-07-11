import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { QueryListId } from "../../utils/query"; // Importa a nova query
import { useUpdateMutation } from "../../utils/Mutations";

export const Form = ({ id }) => {
    const { register, handleSubmit, reset } = useForm(); // Inicializa o react-hook-form
    const navigate = useNavigate(); // Inicializa o hook para navegação
    const mutateUpdate = useUpdateMutation(); // Inicializa a mutação para atualizar dados
    const {/*data é enviado para*/ data: itemData, isSuccess } = QueryListId(id); // Usa a nova query para buscar os dados do item

    // Efeito que roda quando itemData ou isSuccess mudam
    useEffect(() => {
        if (isSuccess && itemData) { // Verifica se a requisição foi bem-sucedida e se itemData está disponível
            reset(itemData); // Reseta o formulário com os dados do item
        }
    }, [isSuccess, itemData, reset]);

    // Função chamada ao submeter o formulário
    const handleUpdate = (data) => {
        mutateUpdate.mutate({ id: id, updatedData: data }); // Faz a mutação para atualizar os dados
        navigate('/home'); // Navega para a página inicial após a atualização
    };

    return (
        // Formulário com onSubmit que chama handleSubmit, que por sua vez chama handleUpdate
        <form onSubmit={handleSubmit(handleUpdate)}>
            <input type="text" {...register('nome')} /> {/* Campo de input registrado com react-hook-form */}
            <button type="submit">Editar</button> {/* Botão de submissão */}
        </form>
    );
};
