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
    <section className="container mx-auto my-10 flex md:flex-row items-start">
      <aside className="w-1/4 h-full">
        <SideRank />
      </aside>
    
      <div className="grid grid-cols-3 gap-6 px-4 w-full ">
        <div className="w-full">
          <BangkokCard />
        </div>
        <div className="w-full">
          <LondonCard />
        </div>
        <div className="w-full">
          <ParisCard />
        </div>

        <div className="w-full">
          <SingapurCard />
        </div>
        <div className="w-full">
          <NewYorkCard />
        </div>
        <div className="w-full">
          <IstanbulCard />
        </div>
      </div>
    </section>
  );
};
export default PopCities;