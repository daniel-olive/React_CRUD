import { useMutation, useQueryClient } from "@tanstack/react-query";
import { catalogoDelete, catalogosAdd, catalogosUpdate } from "./api";

export const useAddMutation = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: catalogosAdd,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['catalogo']
            })
        }
    })
    return mutate
}

export const useDeleteMutation = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: catalogoDelete,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['catalogo']
            })
        }
    })
    return mutate
}

export const useUpdateMutation = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: catalogosUpdate,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['catalogo']
            })
        }
    })
    return mutate
}