import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart = (products) => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for( const id in storedCart){
            const addProduct = products.find(product => product.id === id)
            if(addProduct){
                const quantity = storedCart[id]
                addProduct.quantity = quantity;
                savedCart.push(addProduct)
            }
        }
        setCart(savedCart);
    },[products]) 
    return[cart, setCart]
}

export default useCart ;