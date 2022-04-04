import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);
    const handleRemmoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
        <div className="shop-container">
            <div className="review-item-container">
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    handleRemmoveProduct={handleRemmoveProduct}
                    product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button>Oreder Reviews</button>
                    </Link>
                </Cart>
            </div>
        </div>
    ); 
}; 


export default Orders;