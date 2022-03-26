import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({product, handlAddToCart}) => {
    // const {product, handlAddToCart} =props;
    const { img, name, price, ratings,  seller,} = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <h2>Price: ${price}</h2>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} start</p>
            </div>
            <button onClick={() => handlAddToCart(product)} className='button-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;