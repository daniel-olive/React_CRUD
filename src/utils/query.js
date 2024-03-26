import { useQuery } from "@tanstack/react-query";
import { catalogoGET } from "./api";

export const useCatalogo = () => {
    const query = useQuery({
        queryKey: ["catalogo"],
        queryFn: () => catalogoGET()
    });
    return query
};


