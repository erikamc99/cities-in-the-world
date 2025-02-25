function Restaurants() {
    return (
        <div className="flex flex-column  justify-around items-center space-x-4 bg-blue-100 mt-6 py-2">
            <div className="flex flex-inline">
                <h2 className="text-2xl py-2">Most Popular Restaurant</h2>
            </div>
            <div className="flex-inline">
            <div className="text-center">
                <img src="../src/assets/img/restaurante-disfrutar.jpg" alt="" className="rounded-full w-1/3 mx-auto"/>
                <p>Disfrutar (Barcelona, España)</p>
                </div>
            <div className="text-center">
                <img src="../src/assets/img/asador-etxebarri.jpg" alt=""  className="rounded-full w-1/3 mx-auto"/>
                <p>Etxebarri (Axpe, España)</p>
                </div>
            <div className="text-center">
                <img src="../src/assets/img/restaurante-table.webp" alt=""  className="rounded-full w-1/3 mx-auto"/>
                <p>Table by Bruno Verjus (París, Francia)</p>
                </div>
            <div className="text-center">
                <img src="../src/assets/img/restaurante-diverxo.jpg" alt=""  className="rounded-full w-1/3 mx-auto"/>
                <p>DiverXO (Madrid, España)</p>
            </div>
            </div>
        </div>
    )
}
export default Restaurants;