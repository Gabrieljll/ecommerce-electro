import axios from "axios"

const urlBack = process.env.REACT_APP_URL_BACK;

export const createProduct = async(product) => {
  return await axios.post(urlBack + "/createProduct", product)
}

export const getLineasRequest = async() => {
  return await axios.get(urlBack + "/getLineas")
}

export const getCategoriasRequest = async() => {
  return await axios.get(urlBack + "/getCategorias")
}

export const getProductsRequest = async() => {
  return await axios.get(urlBack + "/getProducts")
}

export const getProductRequest = async(id) => {
  return await axios.get(urlBack + "/getProduct/" + id)
}

export const updateProductRequest = async(product) => {
  return await axios.post(urlBack + "/updateProduct/", product)
}

export const checkoutFinishRequest = async(product) => {
  return await axios.post(urlBack + "/checkoutFinish/", product)
}

export const enviarConsultaMailRequest = async(values) => {
  return await axios.post(urlBack + "/sendAskMail/", values)
}

export const loginRequest = async(values) => {
  return await axios.post(urlBack + "/login/", values)
}