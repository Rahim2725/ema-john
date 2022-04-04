import React from 'react';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);
    return (
        <div className="shop-container">
            <div className="review-item-container">
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    ); 
}; 


export default Orders;