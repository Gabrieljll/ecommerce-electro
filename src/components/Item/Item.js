import { Link } from "react-router-dom"
import "./Item.css"

const Item = ( {name, image, description, price, category, id}) => {
    
    return (
        <div className="card mx-10 animate__animated animate__fadeInUp">
            <div className="p-5 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                    <img src={image} alt={name} />
                </div>
                <h5 className="text-2xl md:text-3xl font-medium mt-3">{name}</h5>
                <p className="text-slate-500 text-lg mt-3">Precio: ${price}</p>
                <p className="text-slate-500 text-lg mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        {/* <p className="cardItemText">Precio: <b className="cardItemText">${price}</b></p>
                        <small className="cardItemText">Categoría: {category}</small> */}
                {/* <div className="shadow-slate-300 text-base button shadow-md py-3 m-auto flex justify-center"> */}
                    <Link className="text-center bg-blue-400 text-blue-800 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out" to={`/detail/${id}`}>Ver Más</Link>
                {/* </div> */}
                    {/* <Link to={`/detail/${id}`} className="btn btn-outline-primary my-2 btnVerMas">Ver más</Link> */}
            </div>
        </div>
    )
}

export default Item