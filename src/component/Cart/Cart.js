import React from 'react';
import './Cart.css'

const Cart = ({cart}) => { 
    return (
        <div className='cart'>
            <h3>Oreder Summary</h3>
            <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;