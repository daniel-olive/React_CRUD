import axios from "axios";

const api = axios.create({ baseURL: 'http://localhost:5003/' });

export const catalogoGET = async () => {
    const response = await api.get('/catalogos/')
    return response.data
}

export const catalogosAdd = async (data) => {
    return await api.post(`/catalogos`, data);
};

export const catalogosUpdate = () => {
    const putData = async (id, data) => {
            const response = await axios.put(`http://localhost:5003/catalogos/${id}`, data);
            return response.data;
        
    };

    return {
        putData,
    };
};

export const catalogoDelete = async (id) => {
    return await api.delete(`/catalogos/${id}`)
}

// export const editar = async (id, data) => {
//     return await axios.put(`http://localhost:5003/catalogos/${id}`, data)
// };