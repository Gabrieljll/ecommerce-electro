import { useState } from 'react'
import * as Yup from 'yup'
import { ProductContext } from "../../context/ProductContext"
import React, { useContext, useEffect } from "react"

export const AdminStockView = () => {
    const { products } = useContext(ProductContext)
    console.log(products)
    // Función para manejar la edición de un producto (puedes implementar según tus necesidades)
    const handleEdit = (productId) => {
        // Lógica de edición aquí
        console.log(`Editar producto con ID: ${productId}`);
    };


    return (
        <>
        <div className="flex justify-center items-center w-full py-10">
            <h1 className="text-3xl font-extrabold">Listado de productos</h1>
        </div>
        <div className="flex flex-col items-center h-[450px] lg:h-screen overflow-y-auto max-h-[80vh] w-max m-auto">
            <div className="container">
                <table className="table w-full h-full border-separate lg:border-collapse table-fixed">
                    <thead className='sticky top-0 bg-white h-full'>
                        <tr>
                            <th className="w-1/4">Nombre Producto</th>
                            <th className="w-1/4">Categoría</th>
                            <th className="w-1/4">Descripcion</th>
                            <th className="w-1/4">Precio</th>
                            <th className="w-1/4">Imagen</th>
                            <th className="w-1/4">Stock</th>
                            <th className="w-1/4">Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.title}</td>
                                    <td>{product.category}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td><img className="w-[50%]" src={product.image} alt="" /></td>
                                    <td>{product.rating.count}</td>
                                    <td>
                                        <button onClick={() => handleEdit(product.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Editar
                                        </button>
                                        <button onClick={() => handleEdit(product.id)} className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>

        </>

/*         <div>
            <form onSubmit={handleSubmit} className="container my5">
                <input onChange={handleInputChange} value={values.nombre} name="nombre" type="text" className="form-control my-2" placeholder="Nombre" />
                <input onChange={handleInputChange} value={values.cantidadAgregada} name="cantidadAgregada" type="number" className="form-control my-2" placeholder="Cantidad del producto por agregar" />

                <button className="btn btn-primary">Enviar</button>
            </form>
        </div> */
    )
}

