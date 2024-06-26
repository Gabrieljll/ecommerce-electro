
import React, { useState, useContext, useEffect, useRef  } from 'react';
import  {ProductContext}  from '../../context/ProductContext'
import {Item} from '../Item/Item'
import {Link} from "react-router-dom"
import { useInView } from "react-intersection-observer";
import "./ShopView.css"
import "../../styles/animate.min.css"
import { ToastContainer } from 'react-toastify';
import { WhatsAppButton } from '../WhatsAppButton/WhatsAppButton';

/* import image hero */
const heroShop = "/images/nuevas_imgs/calidad_y_precio.webp";
const heroShopMobile = "/images/nuevas_imgs/calidad_y_precio_cuadrado.webp";

export const ShopView = () => {
    //const manHero = "/images/hero/banner_tienda.png";
    //const manHero = "/images/hero/banner_tienda.png";
    const isMobile = window.innerWidth < 1000;
    const isSmallView = window.innerWidth < 750;
    const flecha = "/images/shopView/flecha_50.png";
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const scrollRef = useRef();


//    const {productos, loading} = useProductos()
    useEffect(() => {
        if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        updateProducts()
    }, []); // Esto asegura que el scroll ocurre solo una vez al cargar la página

    //get products form product context
    const { products, updateProducts } = useContext(ProductContext);
    const [ref1, inView1] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const categoriesCount = {}
    // Itera sobre los items y cuenta las categorías
    products.forEach(item => {
        if (categoriesCount[item.categoria]) {
            categoriesCount[item.categoria]++;
        } else {
            categoriesCount[item.categoria] = 1;
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
        const isCategoryMatch = selectedCategories.length === 0 ? true : selectedCategories.includes(product.categoria);
        const isPriceInRange =
          (minPrice === '' || parseInt(product.precio) >= parseInt(minPrice)) &&
          (maxPrice === '' || parseInt(product.precio) <= parseInt(maxPrice));
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
    const obtenerLineaDeProducto = (categoria) => {
        // Implementa la lógica para obtener la línea de producto
        const product = products.find((p) => p.categoria === categoria);
        return product ? product.linea : 'Sin línea'; // Ajusta según tu estructura de datos
    };
    
    const categoriasPorLinea = {};
    // Agrupa las categorías por línea de producto
    products.forEach(item => {
        const linea = obtenerLineaDeProducto(item.categoria);
        if (!categoriasPorLinea[linea]) {
            categoriasPorLinea[linea] = new Set();
        }
        categoriasPorLinea[linea].add(item.categoria);
    });
    
    return (
        
        <>
        <WhatsAppButton />
        <section ref={ref1} className={`bg-white md:h-[550px] xl:h-[750px] bg-no-repeat bg-cover bg-center shop-transition-fade-up ${inView1 ? "active" : ""}`}>
            <div ref={scrollRef} className="container mx-auto flex justify-around xl:justify-center h-full">
                {/* text */}

                    {/* image */}
                    <div className="">
                        <img className="" src={isMobile ? heroShopMobile : heroShop} alt="Calidad y Precio en cjrepuestos" title='CJRepuestos/cjrepuestos '/>
                    </div>
            </div>
        </section>



        <div ref={ref2} className={`${isSmallView ? 'mt-[5vw]' : isMobile ? 'mt-[15vw]' : ''} container py-4 flex items-center gap-3 lg:m-auto pl-5 shop-transition-fade-up ${inView2 ? "active" : ""}`}>
            <Link to={"/home"} className="flex text-primary text-gray-600  text-2xl font-[Arimo-Regular]">Inicio  </Link>
            <img src={flecha} alt="flecha CJRepuestos" title='flecha cjrepuestos' /><p className="relative left-[-12px] disabled font-medium text-gray-600 text-2xl font-[Arimo-Regular]">Tienda</p>
        </div>
        <div className={`container flex xl:grid xl:grid-cols-4 gap-6 pt-4 pb-16 m-auto items-start ${isMobile ? 'justify-center w-[100%]' : ''} `}>
            

            <div className={`xl:flex border-2 ${isSidebarOpen ? 'hidden translate-x-0' : 'flex -translate-x-full z-10'} absolute xl:static transition-all duration-1000 flex-col bg-white xl:p-4 shadow xl:transform-none ${isMobile ? 'z-20 d-flex items-center justify-start w-[full]'  : ''} `} >
                
                    <div className="xl:flex xl:justify-center xl:items-center xl:w-[100%] w-[400px] justify-center items-center xl:border-0 border-4 xl:col-span-1 xl:static xl:inset-x-0 2xl:p-12 xl:top-24 bg-white mx-auto rounded-md h-max text-center gap-6 font-bold text-dark-blue xl:text-white xl:shadow-none shadow-2xl bg-transparent grid-flow-col absolute text-xl z-20 transition-all duration-300 xl:left-auto">
                        <button className="xl:hidden relative bg-primary text-black p-2 mb-4 rounded shadow-lg xl:shadow-none" onClick={() => {
                        setSidebarOpen(!isSidebarOpen); }}
                        >
                        Cerrar Filtros
                        </button>
                        <div className="divide-y divide-gray-200 space-y-5 p-8 xl:p-0">
                            {/* category filter */}
                            <div>
                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-[Arimo-Regular]">categorías</h3>
                                <div className="space-y-2">
                                    {/* single category */}
                                    {Object.entries(categoriasPorLinea).map(([linea, categoriasSet]) => (
                                        <div key={linea}>
                                            <div className="flex flex-start">
                                                <h1 className="font-[Arimo-Regular] text-gray-600">{linea}</h1>
                                            </div>
                                            {[...categoriasSet].map((categoria) => (
                                                <div key={categoria} className="flex items-center mx-auto my-2 pl-12">
                                                    <input
                                                        type="checkbox"
                                                        id={`cat-${categoria}`}
                                                        className="text-primary focus:ring-0 rounded-sm cursor-pointer border border-[#850400] font-[Arimo-Regular]"
                                                        checked={selectedCategories.includes(categoria)}
                                                        onChange={() => toggleCategory(categoria)}
                                                    />
                                                    <label htmlFor={`cat-${categoria}`} className="text-gray-600 ml-3 cursor-pointer text-base">{categoria}</label>
                                                    <div className="ml-auto text-gray-600 text-sm font-[Arimo-Regular]">({categoriesCount[categoria] || 0})</div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                                {/* category filter end */}
                            {/* FILTRO PRECIOS */}
                            <div className="pt-4">
                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-[Arimo-Regular]">precio</h3>
                                <div className="mt-4 flex items-center">
                                    <input 
                                    value={minPrice}
                                    onChange={handleMinPriceChange}
                                    type="text" className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded font-[Arimo-Regular]" placeholder="Minimo" />
                                    <span className="mx-3 text-gray-500">-</span>
                                    <input 
                                    value={maxPrice}
                                    onChange={handleMaxPriceChange}
                                    type="text" className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded font-[Arimo-Regular]" placeholder="Maximo" />
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
                <div className="flex items-center lg:pl-0 justify-center">

                {/* ordenamiento Final*/}
                    <button id="botonCerrarFiltros" className={`text-sm h-[45px] items-center w-24 xl:w-44 px-4 py-3 border-gray-500  shadow-sm rounded focus:ring-primary focus:border-primary text-center  text-dark-blue xl:hidden relative bg-primary p-2 border z-10 ${isMobile ? 'text-black rounded text-xl shadow-lg font-bold underline' : ''} `} onClick={(event) => {
                        setSidebarOpen(!isSidebarOpen)
                        quitarBordes(event);    }
                }
                    
                    >
                    {isSidebarOpen && isMobile ? 'Filtros' :  isSidebarOpen ? 'Filtros' : '' }
                    </button>
                </div>
                <div className="bg-overlay z-0"></div>
                {/* products grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pr-5 pl-5 lg:pl-0 lg:pr-0 animate__animated animate__fadeIn">
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
        <ToastContainer/>
    </>

        )
}

export default ShopView