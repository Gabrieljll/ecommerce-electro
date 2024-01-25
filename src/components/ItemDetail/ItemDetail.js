import { useNavigate, useParams } from "react-router-dom"
import React, { useState, useContext  } from "react"
import { CartContext } from "../../context/CartContext"
import { ProductContext } from "../../context/ProductContext"
import { Link } from 'react-router-dom'
import { useInView } from "react-intersection-observer";
import "./ItemDetail.css"

const ItemDetail = ( {idItem, name, descriptionItem, imageItem, priceItem, stock, category}) => {
    const { id } = useParams()
    const { products } = useContext(ProductContext)
    const { addToCart } = useContext(CartContext)

    const [ref1, inView1] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

    const product = products.find((item) => {
        return item.id === parseInt(id);
    })

    if (!product){
        return(
            <section className="h-screen flex justify-center items-center">
                Loading...
            </section>
        )
    }

    const {title, price, description, image} = product;
    
    return ( 
        <section ref={ref1} className={`pt-32 pb-12 lg:py-32 h-screen flex items-center item-transition-fade-up ${inView1 ? "active" : ""}`}>
            <div className="container mx-auto">
                    {/* image and text wrapper */}
                <div className="flex flex-col lg:flex-row items-center">
                    {/* image */}
                    <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
                        <img className="max-w-[200px] lg:max-w-sm" src={image} alt={title} />
                    </div>
                    {/* text */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
                            {title}
                        </h1>
                        <div className="text-xl text-red-500 font-medium mb-6">
                            $ {price}
                        </div>
                        <p className="mb-8">{description}</p>
                        <button onClick={()=> addToCart(product, product.id)} className="bg-gray-800 py-4 px-8 text-white">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemDetail