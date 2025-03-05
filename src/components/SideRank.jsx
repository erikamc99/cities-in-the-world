function SideRank() {
  return (
    <section className="border p-3 h-full">
      <p className="text-xl text-center mb-6">Ranking - Most Visited</p>
      <div className="grid grid-cols-1">
        <div className="relative">
          <img src="../src/assets/img/Bangkok-general.jpg" alt="Bangkok" className="w-full h-40 object-cover"/>
          <div className="relative text-black text-right mt-[-25px]">
            Bangkok
          </div>
        </div>

        <div className="relative">
          <img src="../src/assets/img/london.jpeg" alt="London" className="w-full h-40 object-cover"/>
          <div className="relative text-black text-right mt-[-25px]">
            London
          </div>
        </div>

        <div className="relative">
          <img src="../src/assets/img/paris.avif" alt="Paris" className="w-full h-40 object-cover" />
          <div className="relative text-black text-right mt-[-25px]">
            Paris
          </div>
        </div>

        <div className="relative">
          <img src="../src/assets/img/singapore.avif" alt="Singapore" className="w-full h-40 object-cover"
          />
          <div className="relative text-black text-right mt-[-25px]">
            Singapore
          </div>
        </div>

        <div className="relative">
          <img src="../src/assets/img/new-york.jpeg" alt="New York" className="w-full h-40 object-cover"/>
          <div className="relative text-black text-right mt-[-25px]">
            New York
          </div>
        </div>

        <div className="relative">
          <img src="../src/assets/img/istambul.webp" alt="Istanbul" className="w-full h-40 object-cover"/>
          <div className="relative text-black text-right mt-[-25px]">
            Istanbul
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideRank;


