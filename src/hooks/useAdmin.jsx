import useAuth from "./useAuth.jsx";
import useAxiosSecure from "./useAxiosSecure.jsx";
import {useQuery} from "@tanstack/react-query";

const useAdmin =() => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ["isAdmin", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data.admin);
            return res.data.admin;
        }
    });
    return [isAdmin, isAdminLoading];
}

export default useAdmin;