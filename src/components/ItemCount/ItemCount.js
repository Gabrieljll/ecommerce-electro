
const ItemCount = ({ cantidad, setCantidad, max, handleAgregar}) => {

  const handleRestar = () => {
     cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    cantidad < max && setCantidad(cantidad + 1)
  }



  return (
    <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex flex-row items-center">

            <button className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl" disabled={cantidad===1} onClick={handleRestar}>-</button>
            <span className='py-4 px-6 rounded-lg'>{cantidad}</span>
            <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={handleSumar} disabled={cantidad===max}>+</button>

        </div>
        <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full' onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount