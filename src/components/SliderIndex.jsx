import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const SliderIndex = () => {
  return (
    <>
      <div className="w-full ml-6 mb-10 mx-auto">
        <h1 className="text-3xl font-bold text-left">Popular Fast food</h1>
      </div>

      <Swiper
        breakpoints={{
          390: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={15}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="lg:max-w-sm sm:max-w-2xl md:max-w-2xl mx-auto lg:ml-6 ">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-36">
                <img
                  className="w-36 h-36 object-center object-cover"
                  src="https://meetmcdowell.com/wp-content/uploads/2022/03/Pizza-Hut-Logo-1999.jpg"
                  alt="Nombre del Establecimiento"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Pizza Hut
                </h2>
                <div className="flex items-center mt-2">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="yellow"
                    height="1em"
                    width="1em"
                    className="text-yellow-500"
                  >
                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                  </svg>
                  <span className="text-lg ml-2 text-gray-600">4.5</span>
                </div>
                <p className="mt-2 text-gray-600 truncate">
                  Pizza | Pasticho | Pasta
                </p>
              </div>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="lg:max-w-sm sm:max-w-2xl md:max-w-2xl mx-auto lg:ml-6 ">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-36">
                <img
                  className="w-36 h-36 object-center object-cover"
                  src="https://meetmcdowell.com/wp-content/uploads/2022/03/Pizza-Hut-Logo-1999.jpg"
                  alt="Nombre del Establecimiento"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Pizza Hut
                </h2>
                <div className="flex items-center mt-2">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="yellow"
                    height="1em"
                    width="1em"
                    className="text-yellow-500"
                  >
                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                  </svg>
                  <span className="text-lg ml-2 text-gray-600">4.5</span>
                </div>
                <p className="mt-2 text-gray-600 truncate">
                  Pizza | Pasticho | Pasta
                </p>
              </div>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="lg:max-w-sm sm:max-w-2xl md:max-w-2xl mx-auto lg:ml-6 ">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-36">
                <img
                  className="w-36 h-36 object-center object-cover"
                  src="https://meetmcdowell.com/wp-content/uploads/2022/03/Pizza-Hut-Logo-1999.jpg"
                  alt="Nombre del Establecimiento"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Pizza Hut
                </h2>
                <div className="flex items-center mt-2">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="yellow"
                    height="1em"
                    width="1em"
                    className="text-yellow-500"
                  >
                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                  </svg>
                  <span className="text-lg ml-2 text-gray-600">4.5</span>
                </div>
                <p className="mt-2 text-gray-600 truncate">
                  Pizza | Pasticho | Pasta
                </p>
              </div>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="lg:max-w-sm sm:max-w-2xl md:max-w-2xl mx-auto lg:ml-6 ">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-36">
                <img
                  className="w-36 h-36 object-center object-cover"
                  src="https://meetmcdowell.com/wp-content/uploads/2022/03/Pizza-Hut-Logo-1999.jpg"
                  alt="Nombre del Establecimiento"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Pizza Hut
                </h2>
                <div className="flex items-center mt-2">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="yellow"
                    height="1em"
                    width="1em"
                    className="text-yellow-500"
                  >
                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                  </svg>
                  <span className="text-lg ml-2 text-gray-600">4.5</span>
                </div>
                <p className="mt-2 text-gray-600 truncate">
                  Pizza | Pasticho | Pasta
                </p>
              </div>
            </div>
          </div>
          </SwiperSlide>
        
      </Swiper>

      <div className="w-full ml-6 mb-10 mx-auto mt-10">
        <h1 className="text-3xl font-bold text-left">Popular Mart</h1>
      </div>

      <Swiper
        breakpoints={{
          390: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={15}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="lg:max-w-sm sm:max-w-2xl md:max-w-2xl mx-auto lg:ml-6 ">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-36">
                <img
                  className="w-36 h-36 object-center object-cover"
                  src="https://meetmcdowell.com/wp-content/uploads/2022/03/Pizza-Hut-Logo-1999.jpg"
                  alt="Nombre del Establecimiento"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Pizza Hut
                </h2>
                <div className="flex items-center mt-2">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="yellow"
                    height="1em"
                    width="1em"
                    className="text-yellow-500"
                  >
                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                  </svg>
                  <span className="text-lg ml-2 text-gray-600">4.5</span>
                </div>
                <p className="mt-2 text-gray-600 truncate">
                  Pizza | Pasticho | Pasta
                </p>
              </div>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="lg:max-w-sm sm:max-w-2xl md:max-w-2xl mx-auto lg:ml-6 ">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-36">
                <img
                  className="w-36 h-36 object-center object-cover"
                  src="https://meetmcdowell.com/wp-content/uploads/2022/03/Pizza-Hut-Logo-1999.jpg"
                  alt="Nombre del Establecimiento"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Pizza Hut
                </h2>
                <div className="flex items-center mt-2">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="yellow"
                    height="1em"
                    width="1em"
                    className="text-yellow-500"
                  >
                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                  </svg>
                  <span className="text-lg ml-2 text-gray-600">4.5</span>
                </div>
                <p className="mt-2 text-gray-600 truncate">
                  Pizza | Pasticho | Pasta
                </p>
              </div>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="lg:max-w-sm sm:max-w-2xl md:max-w-2xl mx-auto lg:ml-6 ">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-36">
                <img
                  className="w-36 h-36 object-center object-cover"
                  src="https://meetmcdowell.com/wp-content/uploads/2022/03/Pizza-Hut-Logo-1999.jpg"
                  alt="Nombre del Establecimiento"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Pizza Hut
                </h2>
                <div className="flex items-center mt-2">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="yellow"
                    height="1em"
                    width="1em"
                    className="text-yellow-500"
                  >
                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                  </svg>
                  <span className="text-lg ml-2 text-gray-600">4.5</span>
                </div>
                <p className="mt-2 text-gray-600 truncate">
                  Pizza | Pasticho | Pasta
                </p>
              </div>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="lg:max-w-sm sm:max-w-2xl md:max-w-2xl mx-auto lg:ml-6 ">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-36">
                <img
                  className="w-36 h-36 object-center object-cover"
                  src="https://meetmcdowell.com/wp-content/uploads/2022/03/Pizza-Hut-Logo-1999.jpg"
                  alt="Nombre del Establecimiento"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Pizza Hut
                </h2>
                <div className="flex items-center mt-2">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="yellow"
                    height="1em"
                    width="1em"
                    className="text-yellow-500"
                  >
                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                  </svg>
                  <span className="text-lg ml-2 text-gray-600">4.5</span>
                </div>
                <p className="mt-2 text-gray-600 truncate">
                  Pizza | Pasticho | Pasta
                </p>
              </div>
            </div>
          </div>
          </SwiperSlide>
        
      </Swiper>

      <div className="w-full ml-6 mb-10 mx-auto mt-10">
        <h1 className="text-3xl font-bold text-left">Hot deals</h1>
      </div>

      <Swiper
        breakpoints={{
          390: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={15}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="lg:max-w-sm sm:max-w-2xl md:max-w-2xl mx-auto lg:ml-6 ">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-36">
                <img
                  className="w-36 h-36 object-center object-cover"
                  src="https://meetmcdowell.com/wp-content/uploads/2022/03/Pizza-Hut-Logo-1999.jpg"
                  alt="Nombre del Establecimiento"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Pizza Hut
                </h2>
                <div className="flex items-center mt-2">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="yellow"
                    height="1em"
                    width="1em"
                    className="text-yellow-500"
                  >
                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                  </svg>
                  <span className="text-lg ml-2 text-gray-600">4.5</span>
                </div>
                <p className="mt-2 text-gray-600 truncate">
                  Pizza | Pasticho | Pasta
                </p>
              </div>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="lg:max-w-sm sm:max-w-2xl md:max-w-2xl mx-auto lg:ml-6 ">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-36">
                <img
                  className="w-36 h-36 object-center object-cover"
                  src="https://meetmcdowell.com/wp-content/uploads/2022/03/Pizza-Hut-Logo-1999.jpg"
                  alt="Nombre del Establecimiento"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Pizza Hut
                </h2>
                <div className="flex items-center mt-2">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="yellow"
                    height="1em"
                    width="1em"
                    className="text-yellow-500"
                  >
                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                  </svg>
                  <span className="text-lg ml-2 text-gray-600">4.5</span>
                </div>
                <p className="mt-2 text-gray-600 truncate">
                  Pizza | Pasticho | Pasta
                </p>
              </div>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="lg:max-w-sm sm:max-w-2xl md:max-w-2xl mx-auto lg:ml-6 ">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-36">
                <img
                  className="w-36 h-36 object-center object-cover"
                  src="https://meetmcdowell.com/wp-content/uploads/2022/03/Pizza-Hut-Logo-1999.jpg"
                  alt="Nombre del Establecimiento"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Pizza Hut
                </h2>
                <div className="flex items-center mt-2">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="yellow"
                    height="1em"
                    width="1em"
                    className="text-yellow-500"
                  >
                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                  </svg>
                  <span className="text-lg ml-2 text-gray-600">4.5</span>
                </div>
                <p className="mt-2 text-gray-600 truncate">
                  Pizza | Pasticho | Pasta
                </p>
              </div>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="lg:max-w-sm sm:max-w-2xl md:max-w-2xl mx-auto lg:ml-6 ">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-36">
                <img
                  className="w-36 h-36 object-center object-cover"
                  src="https://meetmcdowell.com/wp-content/uploads/2022/03/Pizza-Hut-Logo-1999.jpg"
                  alt="Nombre del Establecimiento"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Pizza Hut
                </h2>
                <div className="flex items-center mt-2">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="yellow"
                    height="1em"
                    width="1em"
                    className="text-yellow-500"
                  >
                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                  </svg>
                  <span className="text-lg ml-2 text-gray-600">4.5</span>
                </div>
                <p className="mt-2 text-gray-600 truncate">
                  Pizza | Pasticho | Pasta
                </p>
              </div>
            </div>
          </div>
          </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default SliderIndex;
