import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axios'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Product from './Product';

function BestSellers({onProductShoppingCart}) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        try {
            const res = await axiosInstance.get('products')
            setProducts(res.data)
        } catch (e) {
            // Realizar accion cuando la petición falle        
        }
    }

    const handleAddShoppingCart = (product) => {
      
        onProductShoppingCart(product);
    }

    const renderProducts = products.map((product, index) => {
        return <Product key={index} product={product} onAddShoppingCart={handleAddShoppingCart}></Product>
    })

    return (
        <div>

            <Carousel
                slidesPerPage={4}
            >
                {renderProducts}
            </Carousel>

        </div>


    );
}

export default BestSellers;