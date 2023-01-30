import React from "react";
import ProductCard from "/src/components/ui/product-card/product-card";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import { StyledSwiper } from "./styles.js";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function Catalog({ buyOptions, setSwiperRef }) {
  return (
    <StyledSwiper
      onSwiper={setSwiperRef}
      spaceBetween={12}
      direction="vertical"
      slidesPerView="auto"
      scrollbar={{ draggable: true }}
      mousewheel
      pagination={{
        type: "fanction"
      }}
    >
      {buyOptions.map((buyOption) => (
        <SwiperSlide key={buyOption.id}>
          <ProductCard buyOption={buyOption} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
}

export default Catalog;
