import UseClass from "../../Hooks/UseClass";
import AllClass from "./AllClass";


const Classes = () => {
    const [classes] = UseClass()
   

    return (
        <div className="">
            <div className="text-center mb-7 pt-28 ">
                <h1 className="text-3xl text-orange-600 mb-7">All <span className="text-orange-400">Classes</span></h1>
            </div>
            <div className="text-orange-600 divider"></div>
            <div className="grid p-4 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-3">
                {
                    classes.map(data => <AllClass
                        key={data._id}
                        data={data}
                    />)
                }
            </div>
        </div>
    );
};

export default Classes;