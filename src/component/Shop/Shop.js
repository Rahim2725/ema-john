import React, { useEffect, useState } from 'react';
import useProduct from '../../hooks/useProduct';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProduct()
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addProduct = products.find(product => product.id === id);
            if(addProduct){
                const quantity = storedCart[id];
                addProduct.quantity = quantity ;
                savedCart.push(addProduct) 
            }
        }
        setCart(savedCart);
    },[products])
    const handlAddToCart = (selectedProduct) => {
        console.log(selectedProduct)
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1 ;
            newCart =[...cart, selectedProduct]
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1 ;
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    handlAddToCart ={handlAddToCart}
                    ></Product> )
                }
            </div>
            <div className="cart-container">
                {/* <h2>Order Summary  </h2>
                <p>Selected Items: {cart.length}</p> */}
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;