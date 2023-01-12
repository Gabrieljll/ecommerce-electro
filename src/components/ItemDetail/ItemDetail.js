import { useNavigate } from "react-router-dom"

const ItemDetail = ( {id, name, description, image, price, stock, category}) => {

    const navigate = useNavigate()
    const handleVolver = () =>{
        navigate("/")
    }

    return ( 
        <div>
            <h2>{name}</h2>
            <img src={image} alt={image} />
            <br/>
            <small>Categoría: {category}</small>
            <p>{description}</p>
            <p>Precio: ${price}</p>

            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
        </div>
    )
}

export default ItemDetail