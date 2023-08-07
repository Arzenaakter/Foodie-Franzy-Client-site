import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import ClientReview from "../ClientReview/ClientReview";
import Menu from "../Menu/Menu/Menu";
import Reservation from "../Reservation/Reservation";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Cards></Cards>
      <Menu></Menu>
      <About></About>
      <ClientReview></ClientReview>
      <Reservation></Reservation>
    </>
  );
};

export default Home;
