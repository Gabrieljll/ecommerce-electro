import Item from '../Item/Item'
import { Loader } from '../Loader/Loader'


const ItemList = ( {productos, loading} ) => {
  return (
    <div className="container my-5">
      <h2>Nuestros productos</h2>
      <hr/>
      <section className="row my-4">
        {
            loading
            ? <Loader />
            : productos.map( (prod => <Item key={prod.id} {...prod} /> ))
        }
      </section>
    </div>
  )
}

export default ItemList 
