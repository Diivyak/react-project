import React from 'react';

import styles from './ProductCard.module.css';
import AddToCart from '../AddToCart/AddToCart';

function ProductCard({ product }) {
    return (
        <div className={styles.card}>
            <h3>{product.title}</h3>
            <h5>{product.price}</h5>
            <AddToCart product={product}/>
        </div>
    )

}

export default ProductCard;
