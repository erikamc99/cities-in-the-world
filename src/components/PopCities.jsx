import React from "react";
import SideRank from "./SideRank.jsx";
import BangkokCard from "./cards/BangkokCard.jsx";
import LondonCard from "./cards/LondonCard.jsx";
import ParisCard from "./cards/ParisCard.jsx";
import SingapurCard from "./cards/SingapurCard.jsx";
import NewYorkCard from "./cards/NewYorkCard.jsx";
import IstanbulCard from "./cards/IstanbulCard.jsx";

function PopCities() {
  return (
    <section className="container mx-auto mt-6">
      <div>
        <SideRank />
      </div>
    
      <div className="flex mb-4">
        <div className="w-1/3">
          <BangkokCard />
        </div>
        <div className="w-1/3">
          <LondonCard />
        </div>
        <div className="w-1/3">
          <ParisCard />
        </div>
      </div>
      
      <div className="flex mb-4">
        <div className="w-1/3">
          <SingapurCard />
        </div>
        <div className="w-1/3">
          <NewYorkCard />
        </div>
        <div className="w-1/3">
          <IstanbulCard />
        </div>
      </div>
    </section>
  );
};
export default PopCities;