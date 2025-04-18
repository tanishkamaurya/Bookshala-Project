import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import RandomQuotes from "../components/RandomQuotes";
import Mood from "../components/Mood";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <RandomQuotes />
      <Freebook />
      <Mood/>
      <Footer />
    </>
  );
}

export default Home;