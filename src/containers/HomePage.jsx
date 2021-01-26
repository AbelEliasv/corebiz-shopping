import React, { useState } from 'react';
import BestSellers from '../components/BestSellers';
import NavTop from '../components/NavTop';
import Slider from '../components/Slider';

function HomePage() {

    const [shoppingCart, setShoppingCart] = useState([])

    const handleAddProductShoppingCart = (product) => {

        // Crear metodo filter para sacar los productos repetidos
        setShoppingCart([...shoppingCart, product]);
    }


    return (
        <div>
            <NavTop shoppingCart={shoppingCart}></NavTop>
            <Slider></Slider>
            <BestSellers onProductShoppingCart={handleAddProductShoppingCart}></BestSellers>
            
        </div>


    );
}

export default HomePage;