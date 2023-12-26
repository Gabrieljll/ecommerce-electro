
import  ItemList  from '../ItemList/ItemList'
import { useProductos } from './hooks/useProductos'
import { ErrorScreen } from '../ErrorScreen/ErrorScreen'
import { Loader } from '../Loader/Loader'
import React, { useState } from 'react'


export const ItemListContainer = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const {productos, loading} = useProductos()
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
                <div className="xl:flex xl:justify-center xl:items-center xl:w-[100%] w-max xl:col-span-1 xl:static inset-x-0 top-24 p-12 bg-white mx-auto rounded-md h-max text-center gap-6 font-bold text-dark-blue xl:text-white xl:shadow-none shadow-2xl bg-transparent grid-flow-col absolute text-xl z-10">
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
                    <div className="bg-white shadow rounded overflow-hidden group">
                        <div className="relative">
                            <img src="../images/products/producto1.jpeg" alt="" className="w-full" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                    <i>Ver más</i>
                                </a>
                                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                    <i>Me gusta</i>
                                </a>

                            </div>
                        </div>
                        {/* imagen producto final */}
                        {/* contenido producto texto */}
                            <div className="pt-4 pb-3 px-3">
                                <a href="#">
                                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                        Lavarropas Samsung
                                    </h4>
                                </a>
                                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                                    <p className="text-xl text-primary font-semibold">$45.00</p>
                                    <p className="text-sm text-gray-400 line-through">$55.00</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex gap-1 text-sm text-yelow-400">
                                        <span><i>Stock</i></span>
                                    </div>
                                    <div className="text-xs text-gray-500 ml-3">
                                        (150)
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="block w-full py-1 text-center text-white-bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                                Agregar al carrito
                            </a>
                        {/* contenido producto texto  final*/}

                    </div>




                    <div className="bg-white shadow rounded overflow-hidden group">
                        <div className="relative">
                            <img src="../images/products/producto1.jpeg" alt="" className="w-full" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                    <i>Ver más</i>
                                </a>
                                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                    <i>Me gusta</i>
                                </a>

                            </div>
                        </div>
                        {/* imagen producto final */}
                        {/* contenido producto texto */}
                            <div className="pt-4 pb-3 px-3">
                                <a href="#">
                                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                        Lavarropas Samsung
                                    </h4>
                                </a>
                                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                                    <p className="text-xl text-primary font-semibold">$45.00</p>
                                    <p className="text-sm text-gray-400 line-through">$55.00</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex gap-1 text-sm text-yelow-400">
                                        <span><i>Stock</i></span>
                                    </div>
                                    <div className="text-xs text-gray-500 ml-3">
                                        (150)
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="block w-full py-1 text-center text-white-bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                                Agregar al carrito
                            </a>
                        {/* contenido producto texto  final*/}

                    </div>





                    <div className="bg-white shadow rounded overflow-hidden group">
                        <div className="relative">
                            <img src="../images/products/producto1.jpeg" alt="" className="w-full" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                    <i>Ver más</i>
                                </a>
                                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                    <i>Me gusta</i>
                                </a>

                            </div>
                        </div>
                        {/* imagen producto final */}
                        {/* contenido producto texto */}
                            <div className="pt-4 pb-3 px-3">
                                <a href="#">
                                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                        Lavarropas Samsung
                                    </h4>
                                </a>
                                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                                    <p className="text-xl text-primary font-semibold">$45.00</p>
                                    <p className="text-sm text-gray-400 line-through">$55.00</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex gap-1 text-sm text-yelow-400">
                                        <span><i>Stock</i></span>
                                    </div>
                                    <div className="text-xs text-gray-500 ml-3">
                                        (150)
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="block w-full py-1 text-center text-white-bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                                Agregar al carrito
                            </a>
                        {/* contenido producto texto  final*/}

                    </div>





                    <div className="bg-white shadow rounded overflow-hidden group">
                        <div className="relative">
                            <img src="../images/products/producto1.jpeg" alt="" className="w-full" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                    <i>Ver más</i>
                                </a>
                                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                    <i>Me gusta</i>
                                </a>

                            </div>
                        </div>
                        {/* imagen producto final */}
                        {/* contenido producto texto */}
                            <div className="pt-4 pb-3 px-3">
                                <a href="#">
                                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                        Lavarropas Samsung
                                    </h4>
                                </a>
                                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                                    <p className="text-xl text-primary font-semibold">$45.00</p>
                                    <p className="text-sm text-gray-400 line-through">$55.00</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex gap-1 text-sm text-yelow-400">
                                        <span><i>Stock</i></span>
                                    </div>
                                    <div className="text-xs text-gray-500 ml-3">
                                        (150)
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="block w-full py-1 text-center text-white-bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                                Agregar al carrito
                            </a>
                        {/* contenido producto texto  final*/}

                    </div>
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