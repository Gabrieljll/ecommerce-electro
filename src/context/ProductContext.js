import React, { createContext, useState, useEffect } from 'react';
import { getProductsRequest } from '../api/productos.api';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([]);

  // fetch products
  useEffect(() => {
    async function loadProducts() {
      const response = await getProductsRequest();
      setProducts(response.data);
    }
    loadProducts();
  }, []);

  // función para actualizar productos
  const updateProducts = async () => {
    const response = await getProductsRequest();
    setProducts(response.data);
  };

  return (
    <ProductContext.Provider value={{ products, updateProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
