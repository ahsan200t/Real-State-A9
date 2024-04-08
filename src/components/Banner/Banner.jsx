import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import {Autoplay, Navigation } from 'swiper/modules';
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
        <div className="bg-[url(./assets/banner1.jpg)] h-[100vh] w-[100%] bg-cover bg-no-repeat bg-center rounded-xl">
            <h1 className="text-center text-4xl uppercase flex justify-center items-center h-[100vh] font-bold font-poppins text-black ">  <span className="text-xs text-white font-medium">unforgettable</span> <br /> EXPERIENCE</h1>            
           </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(./assets/banner2.jpg)] h-[90vh] w-[100%] bg-cover bg-no-repeat bg-center rounded-xl">
          <h1 className="text-center text-4xl uppercase flex justify-center items-center h-[100vh] font-bold font-poppins text-white text-opacity-100 ">Best Vacation <br />Experience Ever</h1>
          
         
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-[url(./assets/banner3.jpg)] h-[90vh] w-[100%] bg-cover bg-no-repeat bg-center rounded-xl">
            <h1 className="p-4 pt-10 text-2xl uppercase font-bold font-poppins text-black text-opacity-100">CAME AS A GUEST,<br /> LEAVE AS A FRIEND</h1>
            
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
