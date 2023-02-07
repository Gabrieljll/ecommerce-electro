import { useEffect, useState } from "react"
import { pedirItemPorId } from "../../helpers/pedirDatos"
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Loader } from "../Loader/Loader"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const { itemId } = useParams()

    useEffect( () => {
        setLoading(true)
        setError(null)
        pedirItemPorId(Number(itemId))
            .then((data) => {
                setItem(data)
            })
            .catch ((err) => {
                setError(err.error)
            })
            .finally (() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <div className="container my-5">
            {
                loading
                    ? <Loader />
                    : item && <ItemDetail {...item} />
            }
        </div>
    )
}

export default ItemDetailContainer