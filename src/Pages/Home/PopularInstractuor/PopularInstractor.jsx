import { useQuery } from "@tanstack/react-query";
import PopularInstrucors from "./PopularInstrucors";
import { Flip, Hinge } from "react-awesome-reveal";


const PopularInstractor = () => {
    const { data: classes = []} = useQuery(['users'], async () => {
        const res = await fetch(' https://sports-camp-server-eta.vercel.app/classes')
        return res.json();
      })
    return (
        <div>
        <Flip>
        <div className="text-center mb-7">
            <h1 className="text-3xl text-orange-600">Popular <span className="text-orange-400">Instructor</span></h1>
        </div>
        </Flip>
        <div className="text-orange-600 divider"></div>
        <div className="grid mb-20 lg:grid-cols-3 md:grid-cols-3 xl:grid-cmb-20">
        {
           classes.slice(0, 6).map(data =><PopularInstrucors
              key={data._id}
              data={data}
            />)
        }
        </div>
        
    </div>
    );
};

export default PopularInstractor;