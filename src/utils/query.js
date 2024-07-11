import { useQuery } from "@tanstack/react-query";
import { listaGetID, listaGET } from "./api";

export const useLista = () => {
    const query = useQuery({
        queryKey: ["lista"],
        queryFn: () => listaGET()
    });
    return query
};

export const QueryListId = (id) => {
    // Função que retorna a query para buscar os dados de um item específico
    // useQuery é usado para buscar dados do item
    const query = useQuery({
        queryKey: ["item", id], // Chave única para identificar a query
        queryFn: () => listaGetID(id), // Função que busca os dados do item
        enabled: !!id, // A query só é ativada se Id estiver definido
    });
    return query; // Retorna o resultado da query
};