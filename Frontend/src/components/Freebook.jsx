import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from "./Cards";

function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");
  var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore
          odit neque doloremque dignissimos excepturi sint ex eaque quisquam
          magni porro officia, expedita a error!
        </p>
        </div>
      <div className="slider-container">
      <Slider {...settings}>
        {filterData.map((item) => (
          <Cards item={item} key ={item.id} />       
           ))}
      </Slider>
      </div>
    </div>
    </>
  );
}

export default Freebook;
