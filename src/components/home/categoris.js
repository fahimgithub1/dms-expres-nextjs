import BgWrapper from "@/layouts/bgWrapper";
import SectionTitle from "@/lib/sectionTitle";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import CategorisCard from "./CategorisCard";
import { useGetAllCategorisQuery } from "@/pages/xCallapi/apiSlices";
import Lodding from "@/lib/lodding";
import SectionWrapper from "@/layouts/sectionWrapper";


export default function Categoris() {
  const { data: Categories, error, isLoading } = useGetAllCategorisQuery();

  let cateDiv = '';

  if(Categories !== undefined){
    cateDiv = Categories.data.map((item) => (
      <SwiperSlide key={item.id}>
        <CategorisCard
          name={item.name}
          slug={item.slug}
          img={item.category_icon_path}
        />
      </SwiperSlide>
    )) ;
  }

  return (
    <SectionWrapper>
      <SectionTitle title="Categories" />

      <Swiper
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
        grabCursor={true}
        slidesPerView="auto"
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 10,
          },
        }}
      >
        
        {cateDiv}
        {isLoading && <Lodding />}
        {error && <p>data not found !!</p>}
      </Swiper>
    </SectionWrapper>
  );
}
