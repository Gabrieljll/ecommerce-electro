
import  ItemList  from '../ItemList/ItemList'
import { useProductos } from './hooks/useProductos'
import { ErrorScreen } from '../ErrorScreen/ErrorScreen'
import { Loader } from '../Loader/Loader'
import React, { useState, useContext} from 'react'
import  {ProductContext}  from '../../context/ProductContext'
import {Item} from '../Item/Item'

export const ItemListContainer = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
//    const {productos, loading} = useProductos()

    //get products form product context
    const { products } = useContext(ProductContext);
    console.log(products)

    //get only mens clothes or electronics
    const filteredProducts = products.filter (item => {
        return item.category === "electronics" || item.category === "men's clothing" || item.category === "women's clothing" || item.category === "jewelery"
    })

    console.log(filteredProducts)

    return (
        
        <>
        <div className="container py-4 flex items-center gap-3 m-auto">
            <a href="#home" className="text-primary text-base">
                <p className="text-gray-600 font-medium">Home</p>
            </a>
            <span className="text-sm text-gray-400">
                <i> &gt;</i>
            </span>
            <p className="text-gray-600 font-medium">Tienda</p>
        </div>
        <div className="container flex xl:grid xl:grid-cols-4 gap-6 pt-4 pb-16 items-start m-auto">
            <button className="text-center shadow-xl text-dark-blue xl:hidden relative bg-primary p-2 rounded border" onClick={() => setSidebarOpen   (!isSidebarOpen)}
            >
                {isSidebarOpen ? 'Filtros':'' }
            </button>
            <div className={`xl:flex ${isSidebarOpen ? 'hidden' : 'flex'} flex-col bg-white p-4 shadow transition-transform duration-300 xl:transform-none`} >
                <div className="bg-overlay"></div>
                {/* sidebar */}
                <div className="xl:flex xl:justify-center xl:items-center xl:w-[100%] w-auto xl:col-span-1 xl:static inset-x-0 top-24 p-12 bg-white mx-auto rounded-md h-max text-center gap-6 font-bold text-dark-blue xl:text-white xl:shadow-none shadow-2xl bg-transparent grid-flow-col absolute text-xl z-10">
                    <button className="xl:hidden relative bg-primary text-black p-2 mb-4 rounded shadow-lg xl:shadow-none" onClick={() => setSidebarOpen   (!isSidebarOpen)}>
                    Cerrar Filtros
                    </button>
                    <div className="divide-y divide-gray-200 space-y-5">
                        {/* category filter */}
                        <div>
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">categorías</h3>
                            <div className="space-y-2">
                                {/* single category */}
                                <div className="flex items-center">
                                    <input type="checkbox" id="cat-1" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                    <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer">Bedroom</label>
                                    <div className="ml-auto text-gray-600 text-sm">(15)</div>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="cat-1" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                    <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer">Bedroom</label>
                                    <div className="ml-auto text-gray-600 text-sm">(15)</div>
                                </div>
                            </div>
                        </div>
                            {/* category filter end */}

                        {/* MARCAS */}
                        <div>
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">marcas</h3>
                            <div className="space-y-2">
                                {/* single category */}
                                <div className="flex items-center">
                                    <input type="checkbox" id="cat-1" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                    <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer">Bedroom</label>
                                    <div className="ml-auto text-gray-600 text-sm">(15)</div>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="cat-1" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                    <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer">Bedroom</label>
                                    <div className="ml-auto text-gray-600 text-sm">(15)</div>
                                </div>
                            </div>
                        </div>
                        {/* MARCAS FINAL */}
                        {/* FILTRO PRECIOS */}
                        <div className="pt-4">
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">precio</h3>
                            <div className="mt-4 flex items-center">
                                <input type="text" className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded" placeholder="Minimo" />
                                <span className="mx-3 text-gray-500">-</span>
                                <input type="text" className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded" placeholder="Maximo" />
                            </div>
                        </div>
                        {/* FILTRO PRECIOS FINAL */}


                        {/* COLOR PRECIOS */}
                        <div className="pt-4">
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">color</h3>
                            <div className="flex items-center gap-2">
                                <div className="color-selector">
                                    <input type="radio" name="color" className="hidden" id="color-red" />
                                    <label htmlFor="color-red" className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block" style={{backgroundColor: "#fc3d57"}}></label>
                                </div>
                                <div className="color-selector">
                                    <input type="radio" name="color" className="hidden" id="color-white" />
                                    <label htmlFor="color-white" className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block" style={{backgroundColor: "#fff"}}></label>
                                </div>
                                <div className="color-selector">
                                    <input type="radio" name="color" className="hidden" id="color-black" />
                                    <label htmlFor="color-black" className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block" style={{backgroundColor: "#000"}}></label>
                                </div>
                            </div>
                        </div>
                        {/* COLOR PRECIOS FINAL */}
                    </div>
                </div>
            </div>
            {/* products */}
            <div className="col-span-3">
                {/* ordenamiento */}
                <div className="flex items-center mb-4">
                    <select className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary" name="" id="">
                        <option value="">Default</option>
                        <option value="">Precio menor-mayor</option>
                        <option value="">Precio mayor-menor</option>
                        <option value="">Ultimos</option>
                    </select>
                {/* ordenamiento Final*/}
                </div>
                {/* products grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* CARD PRODUCTO */}

                    {filteredProducts.map((product) => {
                        return <Item product={product} key={product.id} />;
                    })}

                    {/* CARD PRODUCTO FINAL*/}
                </div>
                {/* products grid final*/}
            </div>
            {/* products */}


        </div>








        {/* 
            <div className={` flex items-center justify-center min-h-screen container mx-auto ${productos.length >= 3 ? "itemListContainer-body" : "heigh70vh"}`}>
                {
                    loading
                        ? <Loader />
                        : productos.length === 0
                            ?   <ErrorScreen error="La categoría solicitada no existe" logged={true}/>
                            :   <ItemList productos={productos} />
                }
            </div>     */}

    </>

        )
}

export default ItemListContainer