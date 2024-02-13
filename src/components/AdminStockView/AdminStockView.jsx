import { ProductContext } from "../../context/ProductContext"
import React, { useContext } from "react"
import { Link } from "react-router-dom"

export const AdminStockView = () => {
    const { products } = useContext(ProductContext)



    return (
        <div className="min-h-max">
        <div className="flex justify-end items-center m-10">
            <Link>
                Agregar Nuevo Producto
            </Link>
        </div>
        <div className="flex justify-center items-center w-full py-10">
            <h1 className="text-3xl font-extrabold">Listado de productos</h1>
        </div>
        <div className="flex flex-col items-center min-h-max xl:w-max m-auto overflow-x-auto">
            <div className="container">
                <table className="table xl:w-auto h-full border-collapse table-fixed">
                    <thead className='sticky top-0 bg-white h-full'>
                        <tr className="sticky top-0 bg-white h-full">
                            <th className="w-[250px]">Nombre Producto</th>
                            <th className="w-[250px]">Categoría</th>
                            <th className="w-[250px]">Descripcion</th>
                            <th className="w-[250px]">Precio</th>
                            <th className="w-[250px]">Imagen</th>
                            <th className="w-[250px]">Stock</th>
                            <th className="w-[250px]">Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.title}</td>
                                    <td>{product.category}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td><img className="w-[250px]" src={product.image} alt="" /></td>
                                    <td>{product.rating.count}</td>
                                    <td>
                                        <div className="flex flex-col xl:flex-row justify-center items-center">
                                            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 xl:mb-0 xl:mr-2">
                                                <Link to={`/AdminEditProduct/${product.id}`} >
                                                    Editar
                                                </Link>
                                            </div>
                                            <div className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                                <button>
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>

        </div>

    )
}
