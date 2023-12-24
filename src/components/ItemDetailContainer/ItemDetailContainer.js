import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Loader } from "../Loader/Loader"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { ErrorScreen } from "../ErrorScreen/ErrorScreen"

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect( () => {
        setItem(null)
        setLoading(true)
        const docRef = doc(db, "productos", itemId)
        getDoc(docRef)
        .then( (doc) => {
            setItem(( {...doc.data(), id: doc.id}))
        })
        .finally( () =>{
            setLoading(false)
        })
    }, [itemId])

    return (
        <>
            {
                loading
                    ? <Loader />
                    : !item.name
                        ? <ErrorScreen error="No se encuentra el producto solicitado" logged={true}/>
                        : <ItemDetail {...item} />
            }
        </>
    )
}

export default ItemDetailContainer