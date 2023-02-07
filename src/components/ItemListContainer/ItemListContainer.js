import './ItemListContainer.css'
import { useEffect, useState } from "react"
import { pedirDatos } from '../../helpers/pedirDatos'
import  ItemList  from '../ItemList/ItemList'
import { useParams } from "react-router-dom"

export const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect( () => {
    setLoading(true)
    
    pedirDatos()
      .then ( (res) => {
        if (categoryId){
            setProductos(res.filter(prod => prod.category === categoryId))
        } else {
            setProductos(res)
        }
      } )
      .catch( (err) => {
        console.log(err)
      })
      .finally( () => {
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