import { useQuery } from '@tanstack/react-query';
import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider.jsx";
import useAxiosSecure from "./useAxiosSecure.jsx";

const useCart = email => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem("access-token");
    const [axiosSecure] = useAxiosSecure();
    
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:3000/carts?email=${user?.email}`, {
        //         headers: {authorization: `bearer ${token}`}
        //     });
        //     return res.json();
        // },
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`);
            return res.data;
        },
    })
    
    return [cart, refetch];
}

export default useCart;