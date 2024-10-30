import React from "react";
import Header from "./Header.js";
import Bars from "./Bars.tsx";
import Footer from "./Footer.js";
import '../styles/globals.css';

function Card() {
  return(
    <div className="bg-white p-4 rounded-xl shadow-md max-w-sm">
      <Header/>
      <Bars/> 
      <Footer/>
    </div>
  );
};

export default Card;