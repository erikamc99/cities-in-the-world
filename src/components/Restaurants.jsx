function Restaurants() {
    return (
        <div className="flex flex-column md:flex-row justify-around items-center space-x-4 bg-blue-100 mt-6 py-4 px-4">
            <div className="flex flex-col p-5">
                <h2 className="text-3xl py-2">Most Popular Restaurant</h2>
            </div>
            <div className="flex flex-row space-x-4 py-4">
            <div className="text-center">
                <img src="../src/assets/img/restaurante-disfrutar.jpg" alt="" className="rounded-full w-1/2 mx-auto"/>
                <p className="text-xl">Disfrutar (Barcelona, España)</p>
                </div>
            <div className="text-center">
                <img src="../src/assets/img/asador-etxebarri.jpg" alt=""  className="rounded-full w-1/2 mx-auto"/>
                <p className="text-xl">Etxebarri (Axpe, España)</p>
                </div>
            <div className="text-center">
                <img src="../src/assets/img/restaurante-table.webp" alt=""  className="rounded-full w-1/2 mx-auto"/>
                <p className="text-xl">Table by Bruno Verjus (París, Francia)</p>
                </div>
            <div className="text-center">
                <img src="../src/assets/img/restaurante-diverxo.jpg" alt=""  className="rounded-full w-1/2 mx-auto"/>
                <p className="text-xl">DiverXO (Madrid, España)</p>
            </div>
            </div>
        </div>
    )
}
export default Restaurants;