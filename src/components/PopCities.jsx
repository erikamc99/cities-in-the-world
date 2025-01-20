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
    <section className="container mx-auto my-10 flex md:flex-row">
      <aside className="w-full md:w-1/4 lg:w-1/5 px-4">
        <SideRank />
      </aside>
    
      <div className="grid grid-cols-3 ">
        <div className="">
          <BangkokCard />
        </div>
        <div className="">
          <LondonCard />
        </div>
        <div className="">
          <ParisCard />
        </div>

        <div className="">
          <SingapurCard />
        </div>
        <div className="">
          <NewYorkCard />
        </div>
        <div className="">
          <IstanbulCard />
        </div>
      </div>
    </section>
  );
};
export default PopCities;