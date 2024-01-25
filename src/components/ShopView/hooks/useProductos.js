import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../../firebase/config"
import { useEffect, useState } from "react"

export const useProductos = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
  
    useEffect( () => {
        setProductos([])
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

    return {
        productos,
        loading
    }

}