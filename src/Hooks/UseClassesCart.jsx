import { useContext } from "react";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";
import useAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const UseClassesCart = () => {
    const { user, loading } = useContext(AuthContext)
 
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    enabled: ! loading && !! user?.email   && !!localStorage.getItem('access-token'),
       queryFn: async () => {
        const res = await axiosSecure(`/carts?email=${user?.email}`)
        
        return res.data;
    },


  })
     
  return [cart, refetch]



};

export default UseClassesCart;