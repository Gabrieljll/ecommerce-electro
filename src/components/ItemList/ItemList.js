import Item from '../Item/Item'


const ItemList = ( {productos, loading}) => {
  return (
    <div className="container my-5">
      <h2>Nuestros productos</h2>
      <hr/>
      <section className="row my-4">
        {
            loading
            ?   <>
                <div className="loader-div">
                    <img src="/images/gif/loader.gif" className='loader' alt="" />
                </div>
                </>
            : productos.map( (prod => <Item key={prod.id} {...prod} /> ))
        }
      </section>
    </div>
  )
}

export default ItemList 
