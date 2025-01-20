import React from "react";
import Header from "./components/Header.jsx";
import Footer from './components/Footer.jsx';
import HeadCity from './components/HeadCity.jsx';
import PopCities from './components/PopCities.jsx';
import Restaurants from "./components/Restaurants.jsx";

function App() {
    return (
        <div>
            <Header />
            <HeadCity />
            <Restaurants />
            <Footer />
        </div>
    );
}

export default App;
