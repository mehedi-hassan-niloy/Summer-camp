
import { useQuery } from "@tanstack/react-query";
import Popularclass from "./Popularclass";



const PopularClasses = () => {
    const { data: classes = []} = useQuery(['users'], async () => {
        const res = await fetch(' https://sports-camp-server-eta.vercel.app/classes')
        return res.json();
      })
    
    return (
        <div>
           
           <div className="pt-20 text-center mb-7">
                <h1 className="text-3xl text-orange-600">Popular <span className="text-orange-400">Class</span></h1>
            </div>
            <div className="text-orange-600 divider"></div>
            <div className="grid mb-20 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-3">
            {
               classes.slice(0, 6).map(data =><Popularclass
                  key={data._id}
                  data={data}
                />)
            }
            </div>
           
        </div>
    );
};

export default PopularClasses;