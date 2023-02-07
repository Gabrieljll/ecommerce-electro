import './ItemListContainer.css'
import { useEffect, useState } from "react"
import  ItemList  from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"

export const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect( () => {
    setLoading(true)
    
    const productosRef = collection(db, "productos")
    const q = categoryId
                ? query(productosRef, where("category", "==", categoryId) ) 
                : productosRef

    getDocs(q)
        .then( (resp) => {
            setProductos(resp.docs.map( (doc) => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            }))
        })
        .finally ( () => {
            setLoading(false)
        })
  }, [categoryId])

  return (
        <div>
            {   
                 <ItemList productos={productos} loading={loading}/>
            }
        </div>    
    )
}

export default ItemListContainer