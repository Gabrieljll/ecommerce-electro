import { useNavigate } from "react-router-dom"
import  ItemCount  from "../ItemCount/ItemCount"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'


const ItemDetail = ( {id, name, description, image, price, stock, category}) => {

    const { agregarAlCarrito, isInCart } = useCartContext()

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()
    const handleVolver = () =>{
        navigate(-1)
    }

    const handleAgregar = () => {
        const item = {id, name, description, image, price, stock, category, cantidad}
        agregarAlCarrito(item)
    }

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
            <div className="flex flex-col gap-6 lg:w-2/4">
                <img src={image} alt={image} className="w-full h-full aspect-square object-cover rounded-xl" />
                <div className="flex flex-row justify-between h-24">
                    <img src={images.img1} alt={images.img1} className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img2} alt={images.img2} className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                    <img src={images.img3} alt={images.img3} className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
                    <img src={images.img4} alt={images.img4} className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
                </div>
            </div>
                {/* ABOUT */}
                <div className="flex flex-col gap-4 lg:w-2/4">
                    <div>
                        <span className="text-violet-600 font-semibold">Categoría: {category}</span>
                        <h1 className="text-3x1 font-bold">{name}</h1>
                    </div>
                    <p className="text-gray-700">{description} . Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h6 className="text-2x1 font-semibold">$ {price}</h6>
                    
                        

                            { stock < 15 && stock > 0 
                                ?<>
                                    <p className="text-gray-700">{(stock === 1) ? 'Última unidad disponible!' : 'Ultimas '+stock+' unidades disponibles!'}</p>
                                </>
                                :<></>
                            }
                            {
                                !isInCart(id)
                                    ? <ItemCount cantidad={cantidad} setCantidad={setCantidad} max={stock}  handleAgregar={handleAgregar}/>
                                    :<></>
                                    /* : <Link to="/cart" className={`${!isInCart(id) ? "disabled" : ""}`}>Terminar mi compra</Link> */
                            }
            </div>
        </div>
    )
}

export default ItemDetail