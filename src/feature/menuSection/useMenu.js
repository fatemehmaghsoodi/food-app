import { useQuery } from "@tanstack/react-query"
import { getCategoryApi } from "../../services/categoriesService"

export default function useMenu(){
    const {isLoading, data} = useQuery({
        queryKey:["categories"],
        queryFn:getCategoryApi,
    })
    const {data:categories} = data || {} 
    return {categories, isLoading}
}