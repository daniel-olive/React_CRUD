import axios from "axios";

const api = axios.create({ baseURL: 'http://localhost:5003/' });

export const listaGET = async () => {
    const response = await api.get('/listas/')
    return response.data
}

export const listaGetID = async (id) => {
    // Função assíncrona que faz uma requisição GET para obter dados de um item específico baseado no ID
    const response = await api.get(`/listas/${id}`)
    return response.data // Retorna os dados do item
}

export const listasAdd = async (data) => {
    return await api.post(`/listas`, data);
};

export const updateItem = async (id, updatedData) => {
    const response = await axios.put(`http://localhost:5003/listas/${id}`, updatedData);
    return response.data;
};

export const listaDelete = async (id) => {
    return await api.delete(`/listas/${id}`)
}
