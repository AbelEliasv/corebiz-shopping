import React from 'react';
import Stars from './Stars';

function Product(props) {

    const { product, onAddShoppingCart } = props

    const addProductShooppingCart = () => {

        onAddShoppingCart(product)
    }

    return (
        <div>
            <div>
                <img width={100} height={100} src={product.img} alt="not found"></img>
            </div>
            <div>{product.product}</div>
            <div>
                <Stars></Stars>
            </div>
            <div>{product.price}</div>
            <div>
               
                <button onClick={addProductShooppingCart} className="uppercase px-8 py-2 bg-gray-900 text-white rounded-md max-w-max   hover:shadow-lg">Comprar</button>
            </div>
        </div>


    );
}

export default Product;