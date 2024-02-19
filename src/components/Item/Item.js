import React, {useContext} from 'react'
import { Link } from "react-router-dom"
import "./Item.css"
import {BsPlus, BsEyeFill} from 'react-icons/bs'
import { CartContext } from "../../context/CartContext"
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const itemImagesDir = "/images/products/"
export const Item = ( {product} ) => {
    const { addToCart } = useContext(CartContext)
    const {id, imagen, categoria, nombre, precio} = product;
    const notify = () => toast.success("Producto agregado al carrito!",
    {
        transition: Bounce,
        autoClose: 1500,
        draggablePercent: 60,
        hideProgressBar: true
    }
    
);

    return (

        <div>
            <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition z-1">
                <div className="w-full h-full flex justify-center items-center">
                    {/* image */}
                    <div className="w-[200px] mx-auto flex justify-center items-center">
                        <img className="imagenesPosition max-h-[160px] group-hover:scale-110 transition duration-300"
                            src={"data:image/jpeg;base64,"+imagen} alt={nombre} />
                    </div>
                </div>
                {/* buttons */}
                <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <button onClick={() => {
                        addToCart(product, id);
                        notify();
                        }}>
                        <div className="flex justify-center items-center text-white w-12 h-12 bg-orange-600">
                            <BsPlus className="text-3xl" /> 
                        </div>
                    </button>
                    <Link to={`/product/${id}`} className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl">
                        <BsEyeFill />
                    </Link>
                </div>
            </div>
            {/* category, title and price */}
            <div>
                <div className="text-sm capitalize text-gray-500 mb-1">{categoria}</div>
                <Link to={`/product/${id}`}>
                    <h2 className="font-semibold mb-1">{nombre}</h2>
                </Link>
                <div className="font-semibold">$ {precio}</div>
            </div>
            <div></div>
        </div>

        
    )
}

export default Item