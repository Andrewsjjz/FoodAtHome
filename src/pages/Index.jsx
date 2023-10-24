import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";


const Index = () => {
  return (
    <>
       <div className="p-5 grid grid-cols-3 gap-5">
        <div className="rounded shadow-lg md:w-80 lg:w-80 sm:w-1/2">
          <img
            className="w-full"
            src="https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400"
            alt="Mountain"
          />
          <div className="px-6 py-4 flex justify-center sm:text-xs md:text-xs">
            <div className="font-bold mb-2 sm:text-xs md:text-xs lg:text-xl">
              Food
            </div>
          </div>
        </div>

        <div className="rounded shadow-lg md:w-80 lg:w-80 sm:w-1/2">
          <img
            className="w-full"
            src="https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400"
            alt="Mountain"
          />
          <div className="px-6 py-4 flex justify-center sm:text-xs md:text-xs">
            <div className="font-bold mb-2 sm:text-xs md:text-xs lg:text-xl">
              Grocery
            </div>
          </div>
        </div>

        <div className="rounded shadow-lg md:w-80 lg:w-80 sm:w-1/2">
          <img
            className="w-full"
            src="https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400"
            alt="Mountain"
          />
          <div className="px-6 py-4 flex justify-center sm:text-xs md:text-xs">
            <div className="font-bold mb-2 sm:text-xs md:text-xs lg:text-xl">
              Courier
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-7xl m-5">
    <div className="md:flex">
        <div className="md:flex-shrink-0">
        <img className="h-48 w-full object-cover md:w-48" src="https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400" alt="Event image"/>
        </div>
        <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Premium</div>
        <p className="block mt-1 text-lg leading-tight font-medium text-black">Premium</p>
        <p className="mt-2 text-gray-500">Premium</p>
        </div>
    </div>
    </div>

{/* Llevarlo mañana a un componente e importarlo aqui */}
<div className="flex items-center justify-center flex-col h-full">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
          <SwiperSlide>
            <div className="flex flex-col gap-24 mb-20 group relative shadow-lg text-white
             rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl lg:text-2xl">item.title </h1>
                <p className="lg:text-[18px]">item.content </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-24 mb-20 group relative shadow-lg text-white
             rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl lg:text-2xl">item.title </h1>
                <p className="lg:text-[18px]">item.content </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-24 mb-20 group relative shadow-lg text-white
             rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl lg:text-2xl">item.title </h1>
                <p className="lg:text-[18px]">item.content </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-24 mb-20 group relative shadow-lg text-white
             rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl lg:text-2xl">item.title </h1>
                <p className="lg:text-[18px]">item.content </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-24 mb-20 group relative shadow-lg text-white
             rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl lg:text-2xl">item.title </h1>
                <p className="lg:text-[18px]">item.content </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-24 mb-20 group relative shadow-lg text-white
             rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl lg:text-2xl">item.title </h1>
                <p className="lg:text-[18px]">item.content </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-24 mb-20 group relative shadow-lg text-white
             rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl lg:text-2xl">item.title </h1>
                <p className="lg:text-[18px]">item.content </p>
              </div>
            </div>
          </SwiperSlide>
          
      </Swiper>
    </div>

    <div className="flex items-center justify-center flex-col h-full">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
          <SwiperSlide>
            <div className="flex flex-col gap-24 mb-20 group relative shadow-lg text-white
             rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl lg:text-2xl">item.title </h1>
                <p className="lg:text-[18px]">item.content </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-24 mb-20 group relative shadow-lg text-white
             rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl lg:text-2xl">item.title </h1>
                <p className="lg:text-[18px]">item.content </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-24 mb-20 group relative shadow-lg text-white
             rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl lg:text-2xl">item.title </h1>
                <p className="lg:text-[18px]">item.content </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-24 mb-20 group relative shadow-lg text-white
             rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl lg:text-2xl">item.title </h1>
                <p className="lg:text-[18px]">item.content </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-24 mb-20 group relative shadow-lg text-white
             rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl lg:text-2xl">item.title </h1>
                <p className="lg:text-[18px]">item.content </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-24 mb-20 group relative shadow-lg text-white
             rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl lg:text-2xl">item.title </h1>
                <p className="lg:text-[18px]">item.content </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-24 mb-20 group relative shadow-lg text-white
             rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl lg:text-2xl">item.title </h1>
                <p className="lg:text-[18px]">item.content </p>
              </div>
            </div>
          </SwiperSlide>
          
      </Swiper>
    </div>

    <div className="flex items-center justify-center flex-col h-full">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
          <SwiperSlide>
            <div className="flex flex-col gap-24 mb-20 group relative shadow-lg text-white
             rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl lg:text-2xl">item.title </h1>
                <p className="lg:text-[18px]">item.content </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-24 mb-20 group relative shadow-lg text-white
             rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl lg:text-2xl">item.title </h1>
                <p className="lg:text-[18px]">item.content </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-24 mb-20 group relative shadow-lg text-white
             rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl lg:text-2xl">item.title </h1>
                <p className="lg:text-[18px]">item.content </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-24 mb-20 group relative shadow-lg text-white
             rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl lg:text-2xl">item.title </h1>
                <p className="lg:text-[18px]">item.content </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-24 mb-20 group relative shadow-lg text-white
             rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl lg:text-2xl">item.title </h1>
                <p className="lg:text-[18px]">item.content </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-24 mb-20 group relative shadow-lg text-white
             rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl lg:text-2xl">item.title </h1>
                <p className="lg:text-[18px]">item.content </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-24 mb-20 group relative shadow-lg text-white
             rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl lg:text-2xl">item.title </h1>
                <p className="lg:text-[18px]">item.content </p>
              </div>
            </div>
          </SwiperSlide>
          
      </Swiper>
    </div>
     
    </>
  );
};

export default Index;
