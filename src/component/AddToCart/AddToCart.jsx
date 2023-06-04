import React, {useState, useContext} from 'react';
import CartContext from '../../contexts/CartContext';

function AddToCart({product}) {

    const {cart, increaseQuantity, decreaseQuantity} = useContext(CartContext);
    const quantity = cart[product.id] ? cart[product.id].quantity : 0;
    function increment() {
        increaseQuantity(product);
    }

    function decrement() {
        decreaseQuantity(product);
    }

    if (quantity === 0) {
        return (
            <button onClick={increment}>Add To Cart</button>
        );
    } else {
        return (
            <div>
                <button onClick={decrement}>-</button>
                <span>{quantity}</span>
                <button onClick={increment}>+</button>
            </div>
        );
    }
}

export default AddToCart;