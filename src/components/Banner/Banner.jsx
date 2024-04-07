import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation } from 'swiper/modules';
const Banner = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} loop={true}>
        <SwiperSlide>
          <div className="bg-[url(./assets/page3.jpg)] h-[90vh] opacity-80 w-[100%] bg-cover bg-no-repeat bg-center rounded-xl">
            <h1 className="text-center text-4xl uppercase flex justify-center items-center h-[100vh] font-bold font-poppins text-white text-opacity-100 ">STAY WITH US, FEEL <br /> AT HOME</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(./assets/page2.jpg)] h-[90vh] opacity-70 w-[100%] bg-cover bg-no-repeat bg-center rounded-xl">
          <h1 className="text-center text-4xl uppercase flex justify-center items-center h-[100vh] font-bold font-poppins text-black text-opacity-100 ">Best Vacation <br />Experience Ever</h1>
         
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-[url(./assets/page1.jpg)] opacity-80 h-[90vh] w-[100%] bg-cover bg-no-repeat bg-center rounded-xl">
            <h1 className="text-center text-4xl uppercase flex justify-center items-center h-[100vh] font-bold font-poppins text-white text-opacity-100">CAME AS A GUEST, LEAVE <br /> AS A FRIEND</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
