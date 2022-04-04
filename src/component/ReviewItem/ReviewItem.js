import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product, handleRemmoveProduct}) => {
    const {name, price, img, shipping, } = product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div> 
            <div className='review-item-details'>
                <div className='item-detail'>
                    <p className='prodcut-name' title={name}>
                        {name.length > 20 ?  name.slice(0, 20) + '...' : name } 
                    </p>
                    <p>Price: <span>${price}</span></p>
                    <p>Shipping Charge: <span>${shipping}</span></p>
                </div>
                <div>
                    <button onClick={() => {handleRemmoveProduct(product)}} className='delete-button'>
                        <FontAwesomeIcon className='del-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>          
        </div>
    );
};

export default ReviewItem;