import axios from "axios";

const api = axios.create({ baseURL: 'http://localhost:5003/' });

export const listaGET = async () => {
    const response = await api.get('/listas/')
    return response.data
}

export const listasAdd = async (data) => {
    return await api.post(`/listas`, data);
};

export const listasUpdate = () => {
    const putData = async (id, data) => {
            const response = await axios.put(`http://localhost:5003/listas/${id}`, data);
            return response.data;
        
    };

    return {
        putData,
    };
};

export const listaDelete = async (id) => {
    return await api.delete(`/listas/${id}`)
}

// export const editar = async (id, data) => {
//     return await axios.put(`http://localhost:5003/listas/${id}`, data)
// };