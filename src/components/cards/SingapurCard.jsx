function BangkokCard() {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border">
  <img className="w-full h-48 object-cover" src="../img/bangkok-header.png" />
  
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Italy</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
      nihil.
    </p>
  </div>
  
  <div className="flex justify-end px-6 py-4">
    <button
      className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-full">
      Get a Quote
    </button>
  </div>
</div>
    );
};
export default BangkokCard;