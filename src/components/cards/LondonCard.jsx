function LondonCard() {
    return (
        <div className="max-w-sm shadow-lg border">
  <img className="w-full h-48 object-cover" src="../src/assets/img/london.jpeg" />
  <div className="px-6 py-4">
        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibusquia, nulla! Maiores et perferendis eaque, exercitationem praesentiumnihil.</p>
      </div>
      <div className="flex justify-end px-6 py-4">
        <button className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-full"> See more </button>
      </div>
    </div>
    );
};
export default LondonCard;