import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import products from "./../assets/products"

import 'swiper/css';
import 'swiper/css/autoplay'
import ProductCard from './ProductCard';
export default function Releases(){
  return (
    <Swiper
      slidesPerView={1}
      scrollbar={{draggable:true}}
      autoplay={{delay:4000, pauseOnMouseEnter: true}}
      modules={[Autoplay]}
      centeredSlides={true}
      grabCursor={true}
      speed={800}
      longSwipes={false}
    >
      {products.filter((prod)=>prod.latest).map((prod, ind)=><SwiperSlide key={ind}>
        <ProductCard props={prod}/>
      </SwiperSlide>)}
    </Swiper>
  );
};