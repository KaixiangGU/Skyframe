import React from "react";
import { Slider } from "infinite-react-carousel/lib";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
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
      className="mx-auto xl:w-[75%]"
      prevArrow={
        <button type="button">
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </button>
      }
      nextArrow={
        <button type="button">
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </button>
      }
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={`${image}`}
          alt="aerial"
          className="h-[30vh] object-cover lg:h-[40vh]"
        />
      ))}
    </Slider>
  );
};

export default Carousel;
