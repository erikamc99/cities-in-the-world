function SideRank() {
    const cities = [
        { name: 'Bangkok', image: '../src/assets/img/Bangkok-general.png' },
        { name: 'London', image: '../src/assets/img/london.jpeg' },
        { name: 'Paris', image: '../src/assets/img/paris.avif' },
        { name: 'Singapore', image: '../src/assets/img/singapore.avif' },
        { name: 'New York', image: '../src/assets/img/new-york.jpeg' },
        { name: 'Istanbul', image: '../src/assets/img/istanbul.webp' },
      ];
    
      return (
        <section className="container mx-auto my-10">
          <h2 className="text-2xl font-bold text-center mb-6">Top Cities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <CityCard key={index} name={city.name} image={city.image} />
            ))}
          </div>
        </section>
      );
    }
export default SideRank;
