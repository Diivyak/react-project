import React, { useState } from 'react';

import ProductList from './component/ProductList';

import CartContext from './contexts/CartContext';
import Cart from './component/Cart';


function App() {
    const [cart, setCart] = useState({});
    const [showCart, setShowCart] = useState(false);

    /**
     * <product_id> : {
     *  id: Number,
     *  title: String,
     *  price: Number,
     *  quantity: Number
     * }
     */
    function increaseQuantity(product) {
        console.log(product);
        const newCart = { ...cart };
        if (!newCart[product.id]) {
            newCart[product.id] = {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: 0
            }
        }
        newCart[product.id].quantity += 1;
        setCart(newCart);
    }

    function decreaseQuantity(product) {
        const newCart = { ...cart };
        if (!newCart[product.id]) return;
        newCart[product.id].quantity -= 1;

        if (newCart[product.id].quantity == 0) {
            delete newCart[product.id];
        }
        setCart(newCart);
    }

    return (
        <CartContext.Provider value={{
            cart,
            increaseQuantity,
            decreaseQuantity
        }} >
            <div>
                <button onClick={() => setShowCart(!showCart)}>
                    {showCart ? 'Close Cart' : 'Open Cart'}
                </button>
                {showCart ?
                    <Cart /> : null}
                <ProductList />
            </div>
        </CartContext.Provider>
    )
}

export default App;