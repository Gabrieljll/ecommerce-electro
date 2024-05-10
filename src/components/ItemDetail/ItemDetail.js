import { useParams, Navigate, useNavigate, Link } from "react-router-dom"
import React, { useContext, useRef, useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import { ProductContext } from "../../context/ProductContext"
import { useInView } from "react-intersection-observer";
import "./ItemDetail.css"
import { IoMdArrowRoundBack } from "react-icons/io";


const ItemDetail = ( {idItem, name, descriptionItem, imageItem, priceItem, category}) => {
    const { id } = useParams()
    const { products, updateProducts } = useContext(ProductContext)
    const { addToCart } = useContext(CartContext)
    const itemRef = useRef();
    const navigate = useNavigate()

    // const {productos, loading} = useProductos()
    useEffect(() => {
        if (itemRef.current) {
            itemRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        updateProducts()
    }, []); // Esto asegura que el scroll ocurre solo una vez al cargar la página

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
                Cargando...
            </section>
        )
    }

    const {nombre, precio, descripcion, imagen, stock} = product;
    
    return (
        <>

            <section ref={itemRef} className="pt-32 pb-28 lg:py-32 h-screen flex items-center ml-auto">

                <div ref={ref1} className={`container mx-auto item-transition-fade-up ${inView1 ? "active" : ""}`}>
                        {/* imagen and text wrapper */}
                    <div className="flex justify-start items-start w-full">
                        <div className="flex justify-center items-center pb-24 w-[40%]">
                            <Link to={-1} className="cursor-pointer flex justify-center items-center  border-[1px] border-red-800 w-36 md:w-48 p-3 gap-x-1">
                                <IoMdArrowRoundBack className="text-[#850400] text-xl md:text-2xl left-0"/><p className="font-[Arimo-Regular] text-[#850400]  text-xl md:text-2xl">Volver</p> 
                            </Link>
                        </div>
                        <div className="w-[50%]">
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center">
                        {/* imagen */}
                        <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
                            <img className="max-w-[200px] lg:max-w-sm" src={"data:image/jpeg;base64,"+imagen} alt={nombre} />
                        </div>
                        {/* text */}
                        <div className="flex-1 text-center lg:text-left">
                            <h1 className="text-[36px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
                                {nombre}
                            </h1>
                            <div className="text-2xl font-medium mb-6">
                                $ {precio}
                            </div>
                            <div className="text-lg font-normal mb-6">
                                Stock disponible
                            </div>
                            <div className="text-lg font-normal mb-6">
                                Cantidad: 1 Unidad ({stock} disponibles)
                            </div>
                            <p className="mb-8">{descripcion}</p>
                            <div className="flex flex-col w-96 justify-center">
                                <button onClick={()=> {addToCart(product, product.id); navigate("/checkout") }} className="bg-[#850400] py-4 px-8 text-white my-4"><h2 className="font-[Arimo-Bold]">Comprar ahora</h2></button>
                                <button onClick={()=> addToCart(product, product.id)} className="bg-white border border-[#850400] py-4 px-8 text-white my-4"><h1 className="font-[Arimo-Bold] text-[#850400]">Agregar al carrito</h1></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </> 
    )
}

export default ItemDetail