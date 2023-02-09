import './ItemListContainer.css'
import  ItemList  from '../ItemList/ItemList'
import { useProductos } from './hooks/useProductos'
import { ErrorScreen } from '../ErrorScreen/ErrorScreen'
import { Loader } from '../Loader/Loader'
import { useLoginContext } from '../../context/LoginContext'

export const ItemListContainer = () => {
    const {user} = useLoginContext()
    const {productos, loading} = useProductos()
    return (
            <div>
                {
                    loading
                        ? <Loader />
                        : productos.length === 0
                            ?   <ErrorScreen error="La categoría solicitada no existe" logged={user.logged}/>
                            :   <ItemList productos={productos} />
                }
            </div>    
        )
}

export default ItemListContainer