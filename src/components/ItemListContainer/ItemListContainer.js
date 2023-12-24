
import  ItemList  from '../ItemList/ItemList'
import { useProductos } from './hooks/useProductos'
import { ErrorScreen } from '../ErrorScreen/ErrorScreen'
import { Loader } from '../Loader/Loader'

export const ItemListContainer = () => {
    const {productos, loading} = useProductos()
    return (
            <div className={` flex items-center justify-center min-h-screen container mx-auto ${productos.length >= 3 ? "itemListContainer-body" : "heigh70vh"}`}>
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