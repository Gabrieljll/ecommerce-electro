import { Link } from "react-router-dom"
import "./Item.css"

const Item = ( {name, image, description, price, category, id}) => {
    
    return (
        <div className="col-3 m-4 card animate__animated animate__fadeInUp">
            <img className="product-image" src={image} alt={name} />
            <hr />
            <div className="card-container">
                    <h4 className="cardItemText">{name}</h4>
                    <p className="cardItemText">Precio: <b className="cardItemText">${price}</b></p>
                    <small className="cardItemText">Categoría: {category}</small>
                <Link to={`/detail/${id}`} className="btn btn-outline-primary my-2 btnVerMas">Ver más</Link>
            </div>
        </div>
    )
}

export default Item