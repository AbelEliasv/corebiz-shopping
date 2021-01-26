import React from 'react';
import Cart from '../components/Cart';
import Logo from '../statics/logo.png'


function NavTop(props) {

    const { shoppingCart } = props

    return (
        <div>
            <nav className="bg-white-800">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">

                        <div>
                            <img alt="not found" width={140} height={30} src={Logo}></img>
                        </div>
                        <div >
                            Search
                        </div>
                        <div className="flex">
                            
                            <Cart shoppingCart={shoppingCart}></Cart>
                        </div>
                    </div>

                </div>
            </nav>
        </div>


    );
}

export default NavTop;