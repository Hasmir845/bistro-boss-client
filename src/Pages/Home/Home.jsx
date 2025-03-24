import React from "react";
import Banner from "./Banner";
import Category from "./Category/Category";
import Info from "./Info/Info";
import PopularMenu from "./PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";
import Testimonial from "./Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Info></Info>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
