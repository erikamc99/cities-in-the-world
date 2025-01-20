function SideRank() {
  return (
    <section className="container mx-auto my-10 border p-3">
      <p className="text-xl text-center mb-6">Ranking - Most Visited</p>
      <div className="grid grid-cols-1  gap-6">
        <div className="relative">
          <img src="../src/assets/img/Bangkok-general.jpg" alt="Bangkok" className="w-full h-40 object-cover"/>
          <div className="side-text absolute text-black">
            Bangkok
          </div>
        </div>

        <div className="relative">
          <img src="../src/assets/img/london.jpeg" alt="London" className="w-full h-40 object-cover"/>
          <div className="side-text absolute text-black">
            London
          </div>
        </div>

        <div className="relative">
          <img src="../src/assets/img/paris.avif" alt="Paris" className="w-full h-40 object-cover" />
          <div className="side-text absolute text-black">
            Paris
          </div>
        </div>

        <div className="relative">
          <img src="../src/assets/img/singapore.avif" alt="Singapore" className="w-full h-40 object-cover"
          />
          <div className="side-text absolute text-black">
            Singapore
          </div>
        </div>

        <div className="relative">
          <img src="../src/assets/img/new-york.jpeg" alt="New York" className="w-full h-40 object-cover"/>
          <div className="side-text absolute text-black">
            New York
          </div>
        </div>

        <div className="relative">
          <img src="../src/assets/img/istambul.webp" alt="Istanbul" className="w-full h-40 object-cover"/>
          <div className="side-text absolute text-black">
            Istanbul
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideRank;


