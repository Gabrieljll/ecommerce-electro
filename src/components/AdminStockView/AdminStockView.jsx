import { ProductContext } from "../../context/ProductContext"
import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {deleteProductRequest} from "../../api/productos.api"
export const AdminStockView = () => {
    const { products, updateProducts } = useContext(ProductContext)
    
    const handleEliminar = async (id)=>{
        console.log(id)
        await deleteProductRequest(id)
        updateProducts()
    }

    return (
        <div className="min-h-max">
        <div className="flex justify-center xl:justify-end items-center m-10">
            <Link to={"/adminAddProduct"} className="bg-green-500 cursor-pointer enabled text-white rounded-xl py-4 flex flex-col justify-center mx-2 items-center mb-6 w-[200px]">
                <p className="text-xl">Agregar Producto</p>
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
                            <th className="w-[250px]">Linea</th>
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
                                    <td>{product.nombre}</td>
                                    <td>{product.linea}</td>
                                    <td>{product.categoria}</td>
                                    <td>{product.descripcion}</td>
                                    <td>{product.precio}</td>
                                    <td><img className="w-[250px]" src={"data:image/jpeg;base64,"+product.imagen} alt="" /></td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <div className="flex flex-col xl:flex-row justify-center items-center">
                                            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 xl:mb-0 xl:mr-2">
                                                <Link to={`/AdminEditProduct/${product.id}`} >
                                                    Editar
                                                </Link>
                                            </div>
                                            <div className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                                <div onClick={ () =>handleEliminar(product.id)} >
                                                    Eliminar
                                                </div>
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

