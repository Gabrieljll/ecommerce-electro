import axios from "axios"

export const createProduct = async(product) => {
  return await axios.post(process.env.REACT_APP_URL_BACK + "/createProduct", product)
}

export const getLineasRequest = async() => {
  return await axios.get(process.env.REACT_APP_URL_BACK + "/getLineas")
}

export const getCategoriasRequest = async() => {
  return await axios.get(process.env.REACT_APP_URL_BACK + "/getCategorias")
}

export const getProductsRequest = async() => {
  return await axios.get(process.env.REACT_APP_URL_BACK + "/getProducts")
}

export const getProductRequest = async(id) => {
  return await axios.get(process.env.REACT_APP_URL_BACK + "/getProduct/" + id)
}


export const updateProductRequest = async(product) => {
  return await axios.post(process.env.REACT_APP_URL_BACK + "/updateProduct/", product)
}