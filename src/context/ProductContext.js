import React, { createContext, useState, useEffect } from 'react';
import { getProductsRequest } from '../api/productos.api';


export const ProductContext = createContext()

const ProductProvider = ({ children }) => {

  // products state
  const [products, setProducts] = useState([]);

  //fetch products

  useEffect(() => {
    async function loadProducts() {
      const response = await getProductsRequest()
      setProducts(response.data)
    }
    loadProducts()

    /* const fetchProducts = async() => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data)
    }
    fetchProducts(); */
  }, [])

  return <ProductContext.Provider value = {
    { products }
  } > { children } < /ProductContext.Provider>

}

export default ProductProvider;