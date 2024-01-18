
import  ItemList  from '../ItemList/ItemList'
import { useProductos } from './hooks/useProductos'
import { ErrorScreen } from '../ErrorScreen/ErrorScreen'
import { Loader } from '../Loader/Loader'
import React, { useState, useContext} from 'react'
import  {ProductContext}  from '../../context/ProductContext'
import {Item} from '../Item/Item'
import {Link} from "react-router-dom"

/* import image hero */

export const ItemListContainer = () => {
    const manHero = "/images/hero/hombre-apuntando-a-la-izquiera.jpg";
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
//    const {productos, loading} = useProductos()

    //get products form product context
    const { products } = useContext(ProductContext);
    console.log(products)
    const categorias = [...new Set(products.map(item => item.category))];

    const categoriesCount = {}

    // Itera sobre los items y cuenta las categorías
    products.forEach(item => {
        if (categoriesCount[item.category]) {
            categoriesCount[item.category]++;
        } else {
            categoriesCount[item.category] = 1;
        }
    });

    const toggleCategory = (categoria) => {
        if (selectedCategories.includes(categoria)) {
          setSelectedCategories(selectedCategories.filter((cat) => cat !== categoria));
        } else {
          setSelectedCategories([...selectedCategories, categoria]);
        }
      };

      const filteredProductsByCategoryAndPrice = products.filter((product) => {
        const isCategoryMatch = selectedCategories.length === 0 ? true : selectedCategories.includes(product.category);
        const isPriceInRange =
          (minPrice === '' || parseInt(product.price) >= parseInt(minPrice)) &&
          (maxPrice === '' || parseInt(product.price) <= parseInt(maxPrice));
        return isCategoryMatch && isPriceInRange;
      });

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
      };
    
      const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
      };

      const quitarBordes = (event)=>{
        const elem = event.target;
        if(isSidebarOpen){
            elem.style.border = "none";
        } else {
            elem.style.border = "0.5px solid";
        }
      }
    return (
        
        <>

        <section className="bg-white h-[600px] bg-no-repeat bg-cover bg-center">
            <div className="container mx-auto flex justify-around xl:justify-center h-full">
                {/* text */}
                <div className="flex flex-col justify-center">
                    {/* pretitle */}
                    <div className="font-semibold flex items-center uppercase justify-center lg:justify-normal">
                        <div className="w-10 h-[2px] bg-red-500 mr-3"></div>Lorem Ipsum
                    </div>
                        {/* title */}
                        <h1 className="text-[70px] leading-[1.1] font-light mb-4 text-center lg:text-left">
                              LOREM IPSUM LOREM <br />
                        <span className="font-semibold">IPSUM</span>
                        </h1>
                        <Link
                         to={'/'}
                         className="self-center lg:self-start uppercase font-semibold border-b-2 border-gray-800">
                            Descubre mas
                        </Link>
                </div>
                    {/* image */}
                    <div className="hidden xl:block">
                        <img className="h-[80%]" src={manHero} alt="https://br.freepik.com/fotos-gratis/homem-bonito-apontando-para-o-lateral_1184718.htm?epik=dj0yJnU9RzRIMXNuUHlwM002VnlrQVlick9iUjNlLU1rZW5GQXMmcD0wJm49UjlIajhqQUdERzVvQmt1dmtDUGJoUSZ0PUFBQUFBR1dseGZn#page=3&query=Expressao&position=4" />
                    </div>
            </div>
        </section>



        <div className="container py-4 flex items-center gap-3 lg:m-auto pl-5">
            <a href="#home" className="text-primary text-base">
                <p className="text-gray-600 font-medium">Home</p>
            </a>
            <span className="text-sm text-gray-400">
                <i> &gt;</i>
            </span>
            <p className="text-gray-600 font-medium">Tienda</p>
        </div>
        <div className="container flex xl:grid xl:grid-cols-4 gap-6 pt-4 pb-16 items-start m-auto">
            

            <div className={`xl:flex ${isSidebarOpen ? 'hidden translate-x-0' : 'flex -translate-x-full z-10'} absolute xl:static transition-all duration-300 flex-col bg-white xl:p-4 shadow xl:transform-none`} >
                
                <div className="xl:flex xl:justify-center xl:items-center xl:w-[100%] left-0 w-[250px] xl:col-span-1 xl:static xl:inset-x-0 2xl:p-12 xl:top-24 bg-white mx-auto rounded-md h-max text-center gap-6 font-bold text-dark-blue xl:text-white xl:shadow-none shadow-2xl bg-transparent grid-flow-col absolute text-xl z-20 transition-all duration-300 xl:left-auto ">
                    <button className="xl:hidden relative bg-primary text-black p-2 mb-4 rounded shadow-lg xl:shadow-none" onClick={() => {
                    setSidebarOpen(!isSidebarOpen); }}
                    >
                    Cerrar Filtros
                    </button>
                    <div className="divide-y divide-gray-200 space-y-5 p-8 xl:p-0">
                        {/* category filter */}
                        <div>
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">categorías</h3>
                            <div className="space-y-2">
                                {/* single category */}
                               {
                                Object.entries(categoriesCount).map(([categoria, count]) => (
                                <div key={categoria} className="flex items-center m-auto">
                                    <input type="checkbox" id={`cat-${categoria}`} className="text-primary focus:ring-0 rounded-sm cursor-pointer" 
                                    checked={selectedCategories.includes(categoria)}
                                    onChange={() => toggleCategory(categoria)}
                                    />
                                    <label htmlFor={`cat-${categoria}`} className="text-gray-600 ml-3 cursor-pointer text-base">{categoria}</label>
                                    <div className="ml-auto text-gray-600 text-sm">({count})</div>
                                </div>
                                ))}   
                            </div>
                        </div>
                            {/* category filter end */}
                        {/* FILTRO PRECIOS */}
                        <div className="pt-4">
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">precio</h3>
                            <div className="mt-4 flex items-center">
                                <input 
                                value={minPrice}
                                onChange={handleMinPriceChange}
                                type="text" className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded" placeholder="Minimo" />
                                <span className="mx-3 text-gray-500">-</span>
                                <input 
                                value={maxPrice}
                                onChange={handleMaxPriceChange}
                                type="text" className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded" placeholder="Maximo" />
                            </div>
                        </div>
                        <br />
                        {/* FILTRO PRECIOS FINAL */}

                    </div>
                </div>
                
                {/* sidebar */}

            </div>
            {/* products */}
            <div className="col-span-3 relative z-1">
                {/* ordenamiento */}
                <div className="flex items-center mb-4 pl-5 lg:pl-0">
                    <select className="w-24 xl:w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary" name="" id="">
                        <option value="">Default</option>
                        <option value="">Precio menor-mayor</option>
                        <option value="">Precio mayor-menor</option>
                        <option value="">Ultimos</option>
                    </select>
                {/* ordenamiento Final*/}
                    <button id="botonCerrarFiltros" className="text-sm items-center w-24 xl:w-44 px-4 py-3 border-gray-300  shadow-sm rounded focus:ring-primary focus:border-primary text-center  text-dark-blue xl:hidden relative bg-primary p-2 border z-10" onClick={(event) => {
                        setSidebarOpen(!isSidebarOpen)
                        quitarBordes(event);    }
                }
                    
                    >
                    {isSidebarOpen ? 'Filtros':'' }
                    </button>
                </div>
                <div className="bg-overlay z-0"></div>
                {/* products grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pr-5 pl-5 lg:pl-0 lg:pr-0">
                    {/* CARD PRODUCTO */}

                    {filteredProductsByCategoryAndPrice.map((product) => (
                        <Item product={product} key={product.id} />
                    ))}

                    {/* CARD PRODUCTO FINAL*/}
                </div>
                {/* products grid final*/}
            </div>
            {/* products */}

        </div>

    </>

        )
}

export default ItemListContainer