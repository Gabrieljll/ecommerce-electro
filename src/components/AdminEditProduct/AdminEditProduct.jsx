import { useState, useEffect, useRef } from 'react'
import { Formik, Field } from "formik"
import * as Yup from 'yup'
import { ProductContext } from "../../context/ProductContext"
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { useInView } from "react-intersection-observer";
import React, { useContext } from "react"
import {getLineasRequest, getCategoriasRequest, updateProductRequest, getProductRequest} from "../../api/productos.api"



export const AdminEditProduct = () => {
    const { id } = useParams()
    const { updateProducts } = useContext(ProductContext);
    const navigate = useNavigate()
    const scrollRef = useRef();

    const [lineas, setLineas] = useState([])
    const [categorias, setCategorias] = useState([])
    const [selectedImage, setSelectedImage] = useState(null);
    const [product, setProduct] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadLineasAndCategorias() {
            try {
                const responseLineas = await getLineasRequest();
                const responseCategorias = await getCategoriasRequest();
                const responseProduct = await getProductRequest(id);
    
                setLineas(responseLineas.data);
                setCategorias(responseCategorias.data);
                setProduct(responseProduct.data);
                setLoading(false); // Marcar que los datos han sido cargados
            } catch (error) {
                console.error(error);
                setLoading(false); // En caso de error, también detener la carga
            }
        }
    
        loadLineasAndCategorias();
    }, [id]);
    
    if (loading) {
        return <p>Cargando...</p>; // Puedes mostrar un indicador de carga aquí
    }

    const schema = Yup.object().shape({
        nombre: Yup.string().min(4, 'Mínimo 4 caracteres').max(24, 'Máximo 30 caracteres').required('Este campo es requerido'),
        descripcion: Yup.string().min(8, 'Mínimo 4 caracteres').max(124, 'Máximo 30 caracteres').required('Este campo es requerido'),
        /* imagen: Yup.mixed().test('fileFormat', 'Formato de archivo no válido. Solo se permiten archivos JPG o JPEG.', function (value) {
            const { originalValue } = this;
        
            if (originalValue) {
              const allowedFormats = ['image/jpeg', 'image/jpg'];
        
              if (originalValue instanceof File && !allowedFormats.includes(originalValue.type)) {
                return false; // La validación falla si el formato no es el permitido
              }
            }
        
            return true; // La validación pasa si el archivo es nulo o el formato es correcto
          }).required('Este campo es obligatorio'), */
        
        precio: Yup.number().integer('El stock debe ser un número entero').required('Este campo es obligatorio'),
        stock: Yup.number().integer('El stock debe ser un número entero').required('Este campo es obligatorio'),
        sku: Yup.string().min(3, 'Mínimo 4 caracteres').max(24, 'Máximo 30 caracteres').required('Este campo es requerido'),
    })




    const handleCancelarEdicion = (e) => {
        e.preventDefault();
        navigate("/admin");
    }
    
    const handleCreateProduct = async (values) => {
        try {
            const productResponse = await updateProductRequest(values);
            updateProducts()
            navigate("/admin");
            
        } catch (error) {
            console.error(error);
        }
    };

    const selectedImageHandler = e => {
        console.log(e.target.files[0])
        setSelectedImage(e.target.files[0])
    }

    return (


        <div ref={scrollRef} className="flex justify-center items-center min-h-max animate__animated animate__fadeIn">
            <div className="mt-2 text-center w-full xl:w-[600px] px-6 bg-white border border-gray-200 rounded-lg shadow" >
                
                <Formik
                     initialValues={{
                        id: product.id,
                        sku: product.sku,
                        nombre: product.nombre,
                        precio: product.precio,
                        descripcion: product.descripcion,
                       // imagen: product.imagen,
                        linea: "1",
                        categoria: "1",
                        stock: product.stock
                    }} 
                    onSubmit={ async (values) => {
                        await handleCreateProduct(values)
                        
                    }}
                    validator={() => ({})}
                >
                    {({
                        values, handleChange, errors, isValid, handleSubmit, setFieldValue
                    }) => {
                        
                        const requiredFields = ["sku", "nombre", "descripcion", "imagen", "linea", "categoria", "precio", "stock"];
                        const requiredFieldsFilled = requiredFields.every((field) => values[field] !== "");

                        return (
                        <div className="">
                            <div className="sticky">
                                <h1 className="font-bold  font-principal text-3xl text-[#850400]">Editar Producto</h1>
                            </div>
                            <form className="form-body w-full lg:flex lg:justify-center lg:items-start mb-16 py-6 fade-in">
                                <div className="font-principal lg:flex lg:flex-col gap-y-2 h-auto lg:w-max border-b py-4 items-center fade-in">
                                        <div>
                                            <div className="mx-1 my-2 divInput">
                                                <label className="labelInput font-bold" htmlFor="sku">Código SKU</label>
                                                <div className="divInput-inputError">
                                                    <input
                                                        className="form-control my-2 w-[100%] xl:w-[400px]"
                                                        onChange={handleChange}
                                                        type="text"
                                                        id="sku"
                                                        name="sku"
                                                        placeholder="Código SKU"
                                                        value={values.sku}
                                                    />
                                                    <div className="divInputError text-red-500">
                                                        {errors.sku && <p>{errors.sku}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mx-1 my-2 divInput">
                                                <label className="labelInput font-bold" htmlFor="nombre">Nombre de Producto</label>
                                                <div className="divInput-inputError">
                                                    <input
                                                        className="form-control my-2 w-[100%] xl:w-[400px]"
                                                        onChange={handleChange}
                                                        id="nombre"
                                                        type="text"
                                                        name="nombre"
                                                        value={values.nombre}
                                                        
                                                        placeholder="Nombre del producto"
                                                    />
                                                    <div className="divInputError text-red-500">
                                                        {errors.nombre && <p>{errors.nombre}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mx-1 my-2 divInput">
                                                <label className="labelInput font-bold" htmlFor="precio">Precio</label>
                                                <div className="divInput-inputError">
                                                    <input
                                                        className="form-control my-2 w-[100%] xl:w-[400px]"
                                                        onChange={handleChange}
                                                        type="number"
                                                        id="precio"
                                                        name="precio"
                                                        placeholder="Precio del producto"
                                                        value={values.precio}
                                                    />
                                                    <div className="divInputError text-red-500">
                                                        {errors.precio && <p>{errors.precio}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-14">
                                            <div className="mx-1 my-2 mb-14 divInput">
                                                <label className="labelInput font-bold" htmlFor="descripcion">Descripción</label>
                                                <div className="divInput-inputError">
                                                    <textarea
                                                        value={values.descripcion}
                                                        className="form-control my-5 w-[100%] xl:w-[400px]"
                                                        onChange={handleChange}
                                                        type="text"
                                                        id="descripcion"
                                                        name="descripcion"
                                                        placeholder="Descripcion del producto"
                                                        rows={10}
                                                    />
                                                    <div className="divInputError text-red-500">
                                                        {errors.descripcion && <p>{errors.descripcion}</p>}
                                                    </div>
                                                </div>
                                            </div>
{/*                                             <div className="mx-1 my-2 mb-14 divInput">
                                                <label className="labelInput font-bold" htmlFor="imagen">Imagen (JPG o JPEG)</label>

                                                <div className="divInput-inputError">
                                                        <img
                                                            src={"data:image/jpeg;base64,"+values.imagen}
                                                            alt="Preview"
                                                            className="w-28 h-28 object-cover"
                                                        />
                                                    <input
                                                        className="form-control my-2 w-[100%] xl:w-[400px] text-sm xl:text-base"
                                                        onChange={ (e) => 
                                                            { 
                                                            handleChange(e);
                                                            selectedImageHandler(e)
                                                            }
                                                        }
                                                        type="file"
                                                        id="imagen"
                                                        name="imagen"
                                                        accept=".jpg, .jpeg"
                                                        
                                                    />

                                                    <div className="divInputError text-red-500">
                                                        {errors.imagen && <p>{errors.imagen}</p>}
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="mt-16">
                                            <div className="mx-1 mt-10 divInput">
                                                <label className="labelInput font-bold" htmlFor="linea">Linea</label>
                                                <Field
                                                    as="select"
                                                    id="linea"
                                                    name="linea"
                                                    type="text"
                                                    className="block form-control my-2 w-[100%] xl:w-[400px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 sm:text-sm"
                                                >
                                                    {lineas.map((linea) => (
                                                    <option key={linea.id} value={linea.id}>
                                                        {linea.nombre}
                                                    </option>
                                                    ))}
                                                </Field>
                                            </div>
                                        </div>
                                        <div>
                                        <div className="mx-1 my-2 divInput">
                                                <label className="labelInput font-bold" htmlFor="categoria">Categoria</label>
                                                <Field
                                                    as="select"
                                                    id="categoria"
                                                    name="categoria"
                                                    type="text"
                                                    className="block form-control my-2 w-[100%] xl:w-[400px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 sm:text-sm"
                                                >
                                                    {categorias.map((categoria) => (
                                                    <option key={categoria.id} value={categoria.id}>
                                                        {categoria.nombre_categoria}
                                                    </option>
                                                    ))}
                                                </Field>

                                            </div>

                                            <div className="mx-1 my-2 divInput">
                                                <label className="labelInput font-bold" htmlFor="stock">Stock</label>
                                                <div className="divInput-inputError">
                                                    <input
                                                        className="form-control my-2 w-[100%] xl:w-[400px]"
                                                        onChange={handleChange}
                                                        type="number"
                                                        id="stock"
                                                        name="stock"
                                                        placeholder="Cantidad disponible del producto"
                                                        value={values.stock}
                                                    />
                                                    <div className="divInputError text-red-500">
                                                        {errors.stock && <p>{errors.stock}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <button
                                                type="submit"
                                                onClick={handleSubmit}
                                                className={`py-4 flex flex-col justify-center mx-2 items-center mb-6 xl:w-[200px] w-[100px] ${
                                                    isValid ? "bg-green-500 cursor-pointer" : "bg-gray-400 cursor-not-allowed"
                                                } text-white rounded-xl`}
                                                disabled={!isValid} // Deshabilita el botón si el formulario no es válido
                                            >
                                                <p className="text-xl">Guardar</p>
                                            </button>
                                            <div className="py-4 flex flex-col justify-center mx-2 items-center mb-6 xl:w-[200px] w-[100px] bg-red-500 cursor-pointer enabled text-white rounded-xl" type="submit" onClick={handleCancelarEdicion}>
                                                        <p className="text-xl">Cancelar</p>
                                            </div>
                                        </div>
                                </div>
                            </form>

                        </div>
                        )
                    }}
                </Formik>
            </div>
        </div>

    )
}

