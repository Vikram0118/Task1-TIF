"use client"

import React from "react"
import { Articles } from "@/constant"
import ArticleCard from "./ArticleCard"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Latest = () => {

  const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      // arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 431,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (

    <div className='mt-[132px] mb-[57px] md:mt-[157px] w-full max-w-screen-xl mx-auto md:mx-[108px] xl:mx-auto'>
      {/* <div className="md:mx-[108px]"> */}

      <p className='text-[28px] leading-[54px] md:text-[56px] font-semibold text-app-mainBlue text-center md:text-start mb-[23px] md:mb-[30px]'>Latest Articles</p>

      <div className="">
        <Slider {...settings}>
          {Articles.map((article, index) => (
              <ArticleCard key={index} article={article}/>
          ))}
        </Slider>
      </div>

      {/* </div> */}
    </div>
  )
}

export default Latest