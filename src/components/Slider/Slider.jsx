
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <img  src="https://i.ibb.co/mN994np/1x-1.jpg" alt="" /> */}
          <div className="image-container">
          <img src="https://i.ibb.co/5MFHXyb/1.png" alt="" />
         
        </div>
          
        </SwiperSlide>

        <SwiperSlide>
        <div className="image-container">
          <img  src="https://i.ibb.co/c1npkXB/10-Ways-To-Cope-Up-With-Online-Classes-scaled.jpg" alt="" />
         
        </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img  src="https://i.ibb.co/mN994np/1x-1.jpg" alt="" /> */}
          <div className="image-container">
          <img src="https://i.ibb.co/SyFfYWd/3.jpg" alt="" />
          
        </div>
          
        </SwiperSlide>

        <SwiperSlide>
          {/* <img  src="https://i.ibb.co/mN994np/1x-1.jpg" alt="" /> */}
          <div className="image-container">
          <img src="https://i.ibb.co/44kZGS3/ONLINE-ASSIGNMENT-HELP-1080x675.jpg" alt="" />
          
        </div>
          
        </SwiperSlide>


        

        
        
       
       
        
       

       
        
      </Swiper>
  );
};

export default Slider;