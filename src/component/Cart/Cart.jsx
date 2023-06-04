import React, { useContext, useMemo } from 'react';

import styles from './Cart.module.css';
import CartContext from '../../contexts/CartContext';
import AddToCart from '../AddToCart/AddToCart';

/**\
 * '1': {'id': '1'},
 * '2': {'id': '2'},
 */
function Cart() {

    const { cart } = useContext(CartContext);
    const cartList = Object.values(cart);

    function getTotalPrice() {
        let totalPrice = 0;
        cartList.forEach(cartItem => {
            totalPrice += cartItem.quantity * cartItem.price
        });
        return totalPrice;
    }
    
    //const totalPrice = getTotalPrice();
    const totalPrice = useMemo(getTotalPrice, [cart]);

    if (cartList.length === 0) {
        return (
            <div className={styles.cart}>No items in cart</div>
        );
    } else {
        return (
            <div className={styles.cart}>
                <ol >
                    {cartList.map(cartItem => (
                        <li className={styles.cartItem} key={cartItem.id}>
                            <div>{cartItem.title}</div>
                            <div className={styles.cartItemRow}>
                                <AddToCart product={cartItem} />
                                 x Rs. {cartItem.price} = Rs. {cartItem.quantity * cartItem.price}</div>
                        </li>
                    ))}
                </ol>
                <div>Cart Total: {totalPrice}</div>
            </div>

        )
    }

}

export default Cart;