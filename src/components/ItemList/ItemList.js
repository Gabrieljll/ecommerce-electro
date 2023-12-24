import Item from '../Item/Item'

const ItemList = ( { productos } ) => {
  return ( 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            productos.map( (prod => <Item key={prod.id} {...prod} /> ))
        }
      </div>
  )
}

export default ItemList 
