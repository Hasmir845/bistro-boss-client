import React, { useState } from "react";
import FoodCard from "../../../Components/FoodCard/FoodCard";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const OrderTab = ({ items }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const showItems = (arr, size) =>{
    const result = [];
    for(let i = 0; i< arr.length; i+= size){
      result.push(arr.slice(i, i+size));
    }
    return result;
  };

  const displayedItems = showItems(items, itemsPerPage);
  const totalPages = displayedItems.length;

  return (
    <div>
      <Swiper
        pagination={{clickable:true, dynamicBullets:true}}
        modules={[Pagination]}
        className="mySwiper"
        onSlideChange={(swiper) => setCurrentPage(swiper.activeIndex + 1)}
      >
        {
          displayedItems.map((items, index)=>(
            <SwiperSlide key={index}>
          <div className="grid justify-center items-center md:grid-cols-3 gap-10">
            {items.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </SwiperSlide>
          ))
        }
        
      </Swiper>
      <div className="text-center mt-4 text-lg font-semibold">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

export default OrderTab;
