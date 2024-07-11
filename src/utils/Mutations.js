import { useMutation, useQueryClient } from "@tanstack/react-query";
import { listaDelete, listasAdd, updateItem } from "./api";

export const useAddMutation = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: listasAdd,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['lista']
            })
        }
    })
    return mutate
}

export const useDeleteMutation = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: listaDelete,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['lista']
            })
        }
    })
    return mutate
}

export const useUpdateMutation = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: ({ id, updatedData }) => updateItem(id, updatedData),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['lista']
            })
        }
    })
    return mutate
}