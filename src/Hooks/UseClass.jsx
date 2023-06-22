import { useQuery } from "@tanstack/react-query";




const UseClass = () => {
    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch(' https://sports-camp-server-eta.vercel.app/classes');
            return res.json();
        }
    })
    return [classes, loading, refetch]
};

export default UseClass;