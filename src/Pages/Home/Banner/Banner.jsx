import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from './../../../assets/banner/banner1.jpg'
import img2 from './../../../assets/banner/banner2.jpg'
import img3 from './../../../assets/banner/banner3.jpg'
import img4 from './../../../assets/banner/banner4.jpg'

const Banner = () => {
    return (
        <div>

<div className="w-full carousel">
  <div id="slide1" className="relative w-full carousel-item">
    <img src={img1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="relative w-full carousel-item">
    <img src={img2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="relative w-full carousel-item">
    <img src={img3} className="w-full" />
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="relative w-full carousel-item">
    <img src={img4} className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

         {/*       <Carousel>
        <div>
            <img src={img1} />
            
        </div>
        <div>
            <img src={img2} />
          
        </div>
        <div>
            <img src={img3} />
          
        </div>
        <div>
            <img src={img4} />
          
        </div>
    </Carousel> */}
        </div>
    );
};

export default Banner;