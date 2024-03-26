import { useQuery } from "@tanstack/react-query";
import { listaGET } from "./api";

export const useLista = () => {
    const query = useQuery({
        queryKey: ["lista"],
        queryFn: () => listaGET()
    });
    return query
};


