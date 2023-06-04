import { memo, useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';


function ProductList() {

    /*const loadingState = useState(true);
    // useState returns [isLoading, setIsLoading]
    const isLoading = loadingState[0];
    const setIsLoading = loadingState[1];*/

    const [isLoading, setIsLoading] = useState(true);

    /*const productsState = useState([]);
    const products = productsState[0]
    const setProducts = productsState[1];*/

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    //UseEffect(fun, dependencies)
    useEffect(() => {
        /*const promise = fetch('http://localhost:3001/products')
        promise.then(response => {
            console.log('Mock Success', response);
            response.json().then(result => {
                console.log('Mock Result==',result);
            });
        });
        promise.catch(error => {
            console.log('Mock Error', error);
        });*/

        async function loadProducts() {
            try {
                const response = await fetch('http://localhost:3001/products')
                const result = await response.json();
                setIsLoading(false);
                setProducts(result);
            } catch (error) {
                setError(error);
            }
        }
        loadProducts();
    }, []);// [] -> onmount


    if (error) {
        return <div> Something is Wrong!!...</div>;
    }
    else if (isLoading) {
        return <div> Loading...</div>;
    } else {
        return (
            <div >
                {
                    products.map(function (product) {
                        return <ProductCard
                            key={product.id} 
                            product={product} />
                    })
                }
            </div>
        );
    }
}

export default memo(ProductList);