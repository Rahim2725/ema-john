import React from 'react';
import useProduct from '../../hooks/useProduct';

const Orders = () => {
    const [products, setProducts] = useProduct();
    return (
        <div>
            <h1>This is Orders : {products.length}</h1>
        </div>
    );
}; 


export default Orders;