import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import {Autoplay, Navigation } from 'swiper/modules';
import 'animate.css';
const Banner = () => {
  return (
    <div>
      <Swiper 
      autoplay={
        {
          delay:3000,
          disableOnInteraction:false
        }
      }
      navigation={true}
      modules={[Autoplay,Navigation]} 
      loop={true}>
        
        <SwiperSlide>
        <div className="bg-[url(./assets/banner1.jpg)] h-[100vh] w-[100%] bg-cover bg-no-repeat bg-center rounded-xl p-2">
            <h1 className="text-center text-4xl uppercase flex justify-center items-center h-[100vh] font-bold font-poppins text-black animate__animated animate__fadeInRightBig">  <span className="text-xs  text-white font-medium
             ">unforgettable</span> <br /> EXPERIENCE</h1>            
           </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(./assets/banner2.jpg)] h-[90vh] w-[100%] bg-cover bg-no-repeat bg-center rounded-xl">
          <h1 className="text-center text-4xl uppercase flex justify-center items-center h-[100vh] font-bold font-poppins text-white text-opacity-100 animate__animated animate__backInRight ">Best Vacation <br />Experience Ever</h1>
          
         
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-[url(./assets/banner3.jpg)] h-[90vh] w-[100%] bg-cover bg-no-repeat bg-center rounded-xl">
            <h1 className="p-4 pt-10 text-2xl uppercase font-bold font-poppins text-primary animate__animated animate__backInDown">CAME AS A GUEST,<br /> LEAVE AS A FRIEND</h1>
            
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
