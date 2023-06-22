import './About.css'
import img from '../../../assets/About/contact2.jpg'

const About = () => {
    return (
         <div className='mb-20'>
          <div className="bg-fixed hero about-bg">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="p-28 hero-content text-neutral-content">
                <div>
                    <img className='w-[600px] h-[350px]' src={img} alt="" />
                </div>
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-orange-600">About Summer <span className='text-orange-500'>Sports Camp</span></h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="text-white bg-orange-600 btn-info btn">About Details</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;