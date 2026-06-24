import DealCard from "./DealCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Deal = () => {
  return (
    <div className="py-5 lg:py-20">
      <div className="w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={6}
          spaceBetween={15}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {[1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
            <SwiperSlide key={index}>
              <DealCard
                deal={{
                  image:
                    "https://rukminim2.flixcart.com/image/1536/1536/xif0q/smartwatch/l/2/f/-original-imaha8kabchjfqhe.jpeg?q=90",
                  discount: "10",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Deal;