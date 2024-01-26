import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { createContext } from "react"

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(init);

    // item amount state
    const [itemAmount, setItemAmount] = useState(0);

    // total price state
    const [total, setTotal] = useState (0)

    // update item total
    useEffect( () => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount
        }, 0)
        setTotal(total)
    })

    // update item amount
    useEffect(() => {
        if(cart){
            const amount = cart.reduce( (accumulator, currentItem) => {
                return accumulator + currentItem.amount
            }, 0)
            setItemAmount(amount)
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart])

    const addToCart = (product, id) =>{
        const newItem = {...product, amount:1}
        // check if the item is already in the cart

        const cartItem = cart.find(item => {
            return item.id === id;
        })
        if ( cartItem ) {
            const newCart = [...cart].map(item=>{
                if (item.id === id) {
                    return { ...item, amount:cartItem.amount +1 }
                } else {
                    return item;
                }
            })
            setCart(newCart);
            localStorage.setItem('cart', JSON.stringify(cart))
        } else {
            setCart([...cart, newItem]);
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }

    //remove from cart
    const removeFromCart = (id) => {
        const newCart= cart.filter (item => {
            return item.id !== id;
        })
        setCart(newCart)
    }

    //clear cart
    const clearCart = () => {
        setCart([]);
    }

    //increase amount
    const increaseAmount = (id) => {
        const cartItem = cart.find(item => item.id === id)
        addToCart(cartItem, id)
    }

    //decrease amount
    const decreaseAmount = (id) => {
        const cartItem = cart.find(item => {
         return item.id === id;
        })
        if (cartItem){
            const newCart = cart.map((item) => {
                if (item.id===id) {
                    return {...item, amount: cartItem.amount -1}
                } else {
                    return item
                }
            })
            setCart(newCart)
        } 
        if(cartItem.amount < 2) {
            removeFromCart(id);
        }
        
    }

    return (
        <CartContext.Provider value={ { cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total} }>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;