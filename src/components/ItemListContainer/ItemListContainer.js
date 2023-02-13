import './ItemListContainer.css'
import  ItemList  from '../ItemList/ItemList'
import { useProductos } from './hooks/useProductos'
import { ErrorScreen } from '../ErrorScreen/ErrorScreen'
import { Loader } from '../Loader/Loader'

export const ItemListContainer = () => {
    const {productos, loading} = useProductos()
    return (
            <div className="container my-5 itemListContainer-body">
                {
                    loading
                        ? <Loader />
                        : productos.length === 0
                            ?   <ErrorScreen error="La categoría solicitada no existe" logged={true}/>
                            :   <ItemList productos={productos} />
                }
            </div>    
        )
}

export default ItemListContainer