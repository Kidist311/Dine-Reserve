import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../styles/index.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';

export default function SwiperComponent() {
  return (
    //<div className="relative  w-full">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        //loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },     // small screens
          768: { slidesPerView: 2 },   // medium screens
          //1024: { slidesPerView: 3 },  // large screens
        }}
        className="mySwiper h-[500px]   "
      >
            <SwiperSlide className=" rounded-2xl">
                <div className="flex flex-col px-15 pt-30 ">
                  <h1 className="font-bold text-left text-2xl">“The best burgers in LA, period”</h1>
                  <p className="text-left pt-5">
                    Lorem ipsum dolor sit amet consectetur adipiscing elitilmim <br />
                    semper adipiscing massa gravida nisi cras enim quis nibholm <br />
                    varius amet gravida ut facilisis neque egestas.
                  </p>

                  {/* Profile section */}
                  <div className="flex items-center space-x-3 pt-8 h-[100px] w-[300px]">
                    <div className='h-[70px] w-[70px]'>
                      <img
                        src="/icons/didif.svg"
                        alt="Sophie Moore"
                        className="w-5 h-5 rounded-full"
                      />
                    </div>
                    <div>
                      <h1 className="text-lg font-semibold">Sophie Moore</h1>
                      <p className="text-gray-500 text-sm">Los Angeles, CA</p>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className=" rounded-2xl">
                <div className="flex flex-col px-15 pt-30 ">
                  <h1 className="font-bold text-left text-2xl">“The best burgers in LA, period”</h1>
                  <p className="text-left pt-5">
                    Lorem ipsum dolor sit amet consectetur adipiscing elitilmim <br />
                    semper adipiscing massa gravida nisi cras enim quis nibholm <br />
                    varius amet gravida ut facilisis neque egestas.
                  </p>

                  {/* Profile section */}
                  <div className="flex items-center space-x-3 pt-8 h-[100px] w-[300px]">
                    <div className='h-[70px] w-[70px]'>
                      <img
                        src="/icons/didif.svg"
                        alt="Sophie Moore"
                        className="w-5 h-5 rounded-full"
                      />
                    </div>
                    <div>
                      <h1 className="text-lg font-semibold">Sophie Moore</h1>
                      <p className="text-gray-500 text-sm">Los Angeles, CA</p>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className=" rounded-2xl">
                <div className="flex flex-col px-15 pt-30 ">
                  <h1 className="font-bold text-left text-2xl">“The best burgers in LA, period”</h1>
                  <p className="text-left pt-5">
                    Lorem ipsum dolor sit amet consectetur adipiscing elitilmim <br />
                    semper adipiscing massa gravida nisi cras enim quis nibholm <br />
                    varius amet gravida ut facilisis neque egestas.
                  </p>

                  {/* Profile section */}
                  <div className="flex items-center space-x-3 pt-8 h-[100px] w-[300px]">
                    <div className='h-[70px] w-[70px]'>
                      <img
                        src="/icons/didif.svg"
                        alt="Sophie Moore"
                        className="w-5 h-5 rounded-full"
                      />
                    </div>
                    <div>
                      <h1 className="text-lg font-semibold">Sophie Moore</h1>
                      <p className="text-gray-500 text-sm">Los Angeles, CA</p>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="border rounded-2xl">
                <div className="flex flex-col px-15 pt-30 ">
                  <h1 className="font-bold text-left text-2xl">“The best burgers in LA, period”</h1>
                  <p className="text-left pt-5">
                    Lorem ipsum dolor sit amet consectetur adipiscing elitilmim <br />
                    semper adipiscing massa gravida nisi cras enim quis nibholm <br />
                    varius amet gravida ut facilisis neque egestas.
                  </p>

                  {/* Profile section */}
                  <div className="flex items-center space-x-3 pt-8 h-[100px] w-[300px]">
                    <div className='h-[70px] w-[70px]'>
                      <img
                        src="/icons/didif.svg"
                        alt="Sophie Moore"
                        className="w-5 h-5 rounded-full"
                      />
                    </div>
                    <div>
                      <h1 className="text-lg font-semibold">Sophie Moore</h1>
                      <p className="text-gray-500 text-sm">Los Angeles, CA</p>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
        
        
      </Swiper>
   // </div>
  );
}
