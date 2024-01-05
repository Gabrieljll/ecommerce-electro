import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { createContext } from "react"

export const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = () =>{
        console.log("added to the cart")
    }
    return (
        <CartContext.Provider value={ {addToCart} }>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;