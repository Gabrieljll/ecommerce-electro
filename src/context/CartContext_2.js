import { useEffect } from "react"
import { useContext } from "react"
import { createContext } from "react"
import { useState } from "react"

export const CartContext = createContext()

export const useCartContext = () => {
    return useContext(CartContext)
}
const init = JSON.parse(localStorage.getItem('cart')) || []
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(init)

    const agregarAlCarrito = (item) => {
        //setCart([...cart, item])
        const newCart = cart.slice()
        newCart.push(item)
        setCart(newCart)
        localStorage.setItem('cart', JSON.stringify(cart))
    }
    const modificarCantidadItem = (itemParam, cantidad) =>{
        let posicion = cart.indexOf(itemParam)
        if ( posicion !== -1 ){
            const newCart = []
            const newItem = {
                id: itemParam.id,
                name: itemParam.name,
                description: itemParam.description,
                image: itemParam.image,
                price: itemParam.price,
                stock: itemParam.stock,
                category: itemParam.category,
                cantidad: cantidad
            }
            for(let i = 0; i < cart.length; i++){
                (i !== posicion) ? newCart.push(cart[i]) : newCart.push(newItem)
            }
            setCart(newCart)
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        return true && cart[posicion]
    }

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id) )
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const emptyCart = () =>{
        setCart([])
    }

    const totalCart = () =>{
        return cart.reduce((acc, item) => acc + item.price * item.cantidad, 0)
    }

    const totalCantidad = () =>{
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    useEffect( () => {
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

    return (
        <CartContext.Provider value={  { cart, agregarAlCarrito, isInCart, emptyCart, totalCart, removeItem, totalCantidad, modificarCantidadItem}}>
            {children}
        </CartContext.Provider>
    )
}