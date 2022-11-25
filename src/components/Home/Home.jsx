import React from "react";
import Carousel from "../Carousel/Carousel";
import Locations from "../Locations/Locations";
import Post from "../Posts/Post";

const Home = () => {
  return (
    <div className="mx-auto">
      <Carousel />
      <Locations />
      <Post />
    </div>
  );
};

export default Home;
