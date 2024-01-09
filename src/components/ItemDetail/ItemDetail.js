import { useNavigate, useParams } from "react-router-dom"
import { useState, useContext  } from "react"
import { CartContext } from "../../context/CartContext"
import { ProductContext } from "../../context/ProductContext"
import { Link } from 'react-router-dom'


const ItemDetail = ( {idItem, name, descriptionItem, imageItem, priceItem, stock, category}) => {
    const { id } = useParams()
    const { products } = useContext(ProductContext)
    const { addToCart } = useContext(CartContext)

    const product = products.find(item => {
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
        <section className="pt-32 pb-12 lg:py-32 h-screen">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div>
                <img className="max-w-[200px] lg:max-w-sm" src={image} alt={title} />
            </div>

            <div>
                texto imagen
            </div>
          </div>
        </div>

        </section>
    )
}

export default ItemDetail