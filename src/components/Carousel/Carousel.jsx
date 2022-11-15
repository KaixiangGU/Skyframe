import React from "react";
import { Slider } from "infinite-react-carousel/lib";
import "./Carousel.css";

const images = [
  "./images/carousel/carousel-1.jpg",
  "./images/carousel/carousel-2.jpg",
  "./images/carousel/carousel-3.jpg",
  "./images/carousel/carousel-4.jpg",
  "./images/carousel/carousel-5.jpg",
];

const Carousel = () => {
  return (
    <Slider
      dots
      className="mx-auto lg:w-[50%]"
      prevArrow={
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      }
      nextArrow={
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      }
    >
      {images.map((image, index) => (
        <img key={index} src={`${image}`} alt="aerial" className="h-[30vh] object-cover" />
      ))}
    </Slider>
  );
};

export default Carousel;
