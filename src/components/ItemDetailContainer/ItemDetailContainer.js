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
        setLoading(true)
        const docRef = doc(db, "productos", itemId)
        if (docRef){
            getDoc(docRef)
            .then( (doc) => {
                setItem(( {...doc.data(), id: doc.id}))
            })
            .finally( () =>{
                setLoading(false)
            })
        } else {
            return (
                <ErrorScreen></ErrorScreen>
            )
        }
    }, [itemId])
    
    return (
        <div className="container my-5">
            {
                loading
                    ? <Loader />
                    : item.name 
                        ? <ItemDetail {...item} />
                        : <ErrorScreen error="No se encuentra el producto solicitado"/>
            }
        </div>
    )
}

export default ItemDetailContainer