import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export const Form = ({ onAction }) => {
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();

    const getDataUpdate = async () => {
        const response = await axios.get(`http://localhost:5003/listas/${id}`)
        reset(response.data)
    }

    useEffect(() => {
        getDataUpdate();
    }, []);

    return (
        <form onSubmit={handleSubmit(onAction)}>
            <input type="text" {...register('nome')} />
            <button type="submit">Editar</button>
        </form>
    );
};
