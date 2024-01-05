import { useNavigate } from "react-router-dom"
import  ItemCount  from "../ItemCount/ItemCount"
import { useState } from "react"
/*  import { useCartContext } from "../../context/CartContext" */
import { Link } from 'react-router-dom'


const ItemDetail = ( {id, name, description, image, price, stock, category}) => {

    /* const { agregarAlCarrito, isInCart } = useCartContext() */

/*     const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()
    const handleVolver = () =>{
        navigate(-1)
    }

    const handleAgregar = () => {
        const item = {id, name, description, image, price, stock, category, cantidad}
        agregarAlCarrito(item)
    } */

    const [images, setImages] = useState({
        img1 : "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img2 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img3 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img4 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png"
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [amount, setAmount] = useState(1);

    return ( 
        <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
            </div>
    )
}

export default ItemDetail