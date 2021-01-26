


import React from 'react';
import ShoppingCart from '../statics/shopping-cart.png'


function Cart(props) {

    const { shoppingCart } = props


    const renderProducts = shoppingCart.map((item, index) => {
        return <li key={index} class="">
            <div>
                <div className="rounded-t bg-white w-500 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">{item.product}- ${item.price}</div>
            </div>


        </li>
    })


    return (

        <div className="flex space-x-2">

            <div className="p-10">

                <div className="dropdown inline-block relative z-50">
                    <button className="bg-white-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                        <div>
                            <img width={20} src={ShoppingCart}></img>
                        </div>
                        <span className=" px-2 py-1 text-xs  text-red-100  bg-red-600 rounded-full">{shoppingCart.length}</span>
                    </button>
                    <ul className="dropdown-menu bg-white-300  absolute hidden text-dark pt-1">

                        {shoppingCart.length === 0 ?
                            <li className="w-auto"><a className="rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">No hay productos agregados</a></li>
                            :

                            (renderProducts)


                        }



                    </ul>
                </div>

            </div>
        </div>


    );
}

export default Cart;