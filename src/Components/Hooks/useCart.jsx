import { QueryClient, useQuery } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";
import axios from "axios";



export const queryClient = new QueryClient()

const useCart = () => {
    const {user} = useAuthContext()

    const {data: cart = [] , refetch} = useQuery({
        queryKey:["cart" , user?.email],
        queryFn:async() => {
            const res = await axios.get(`http://localhost:5000/cart?email=${user?.email}`)
            return res.data
        }
    })

    return {cart , refetch}
};

export default useCart;