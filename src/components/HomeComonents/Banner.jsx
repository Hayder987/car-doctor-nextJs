"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Slide from "./Slide";
import banner1 from "@/assets/images/banner/1.jpg";
import banner2 from "@/assets/images/banner/2.jpg";
import banner3 from "@/assets/images/banner/3.jpg";
import banner4 from "@/assets/images/banner/4.jpg";
import banner5 from "@/assets/images/banner/5.jpg";
import banner6 from "@/assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1000}
      >
        <SwiperSlide>
          <Slide
            banner={banner1}
            nxtBanner={banner2}
            title={"Affordable Price For Car Servicing"}
            desc={
              "There are many variations of passages of  available, but the majority have suffered alteration in some form"
            }
          ></Slide>
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            banner={banner2}
            nxtBanner={banner3}
            title={"Affordable Price For Car Servicing"}
            desc={
              "There are many variations of passages of  available, but the majority have suffered alteration in some form"
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            banner={banner3}
            nxtBanner={banner4}
            title={"Affordable Price For Car Servicing"}
            desc={
              "There are many variations of passages of  available, but the majority have suffered alteration in some form"
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide
            banner={banner4}
            nxtBanner={banner5}
            title={"Affordable Price For Car Servicing"}
            desc={
              "There are many variations of passages of  available, but the majority have suffered alteration in some form"}
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide
            banner={banner5}
            nxtBanner={banner6}
            title={"Affordable Price For Car Servicing"}
            desc={
              "There are many variations of passages of  available, but the majority have suffered alteration in some form"}
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide
            banner={banner6}
            nxtBanner={banner1}
            title={"Affordable Price For Car Servicing"}
            desc={
              "There are many variations of passages of  available, but the majority have suffered alteration in some form"}
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
