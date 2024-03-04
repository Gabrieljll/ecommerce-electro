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
    const {id, imagen, linea, categoria, nombre, precio} = product;
    const notify = () => toast.success("Producto agregado al carrito!",
    {
        transition: Bounce,
        autoClose: 1500,
        draggablePercent: 60,
        hideProgressBar: true
    }
    
);

const formattedPrice = precio.toLocaleString();

    return (

        <div>
            <div className="border-2  h-[300px] relative overflow-hidden group transition z-1">
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
                        <div className="flex justify-center items-center text-white w-12 h-12 bg-[#e13a35]">
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
                <div className="text-base capitalize text-gray-800 mb-1 p-1 font-[Arimo-Regular]">{linea} - {categoria}</div>
                <Link className="flex justify-center" to={`/product/${id}`}>
                    <div className="border w-[350px] flex justify-center bg-[#bf3631] rounded">
                        <h2 className="mb-1 text-white text-lg font-[Arimo-Regular]">{nombre}</h2>
                    </div>
                </Link>
                <div className="flex justify-center font-semibold"><h2 className='font-[Arimo-Regular]'>$ {formattedPrice}</h2></div>
            </div>
            <div></div>
        </div>

        
    )
}

export default Item