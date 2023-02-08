import './ItemListContainer.css'
import  ItemList  from '../ItemList/ItemList'
import { useProductos } from './hooks/useProductos'
import { ErrorScreen } from '../ErrorScreen/ErrorScreen'

export const ItemListContainer = () => {

    const {productos, loading} = useProductos()
  return (
        <div>
            {
                productos.length === 0
                ? <ErrorScreen error="La categoría solicitada no existe" />
                :<ItemList productos={productos} loading={loading}/>
            }
        </div>    
    )
}

export default ItemListContainer