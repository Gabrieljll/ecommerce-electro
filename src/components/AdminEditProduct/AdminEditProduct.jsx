import { useState, useEffect, useRef } from 'react'
import { Formik } from "formik"
import * as Yup from 'yup'
import { ProductContext } from "../../context/ProductContext"
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { useInView } from "react-intersection-observer";
import React, { useContext } from "react"

export const AdminEditProduct = () => {
    const { products } = useContext(ProductContext)
    const { id } = useParams()
    const navigate = useNavigate()
    const scrollRef = useRef();

    const product = products.find((item) => {
        return item.id === parseInt(id);
    })
    

    useEffect(() => {
        if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []); // Esto asegura que el scroll ocurre solo una vez al cargar la página

    const schema = Yup.object().shape({
        nombre: Yup.string().min(4, 'Mínimo 4 caracteres').max(24, 'Máximo 30 caracteres').required('Este campo es requerido'),
        descripcion: Yup.string().min(8, 'Mínimo 4 caracteres').max(124, 'Máximo 30 caracteres').required('Este campo es requerido'),
        imagen: Yup.mixed()
        .test('fileFormat', 'Formato de archivo no válido. Solo se permiten archivos JPG o JPEG.', (value) => {
        // Validar el formato de archivo
        return value && ['image/jpeg', 'image/jpg'].includes(value.type);
    })
    .required('Este campo es obligatorio'),
        categoria: Yup.string().min(4, 'Mínimo 4 caracteres').max(40, 'Máximo 40 caracteres').required('Este campo es requerido'),
        precio: Yup.number().integer('El stock debe ser un número entero').required('Este campo es obligatorio'),
        stock: Yup.number().integer('El stock debe ser un número entero').required('Este campo es obligatorio'),
    })


    const [values, setValues] = useState(
        {
            nombre: '',
            cantidadAgregada: '',
        }
    )

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        }
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    } 

    const handleCancelarEdicion = (e) => {
        e.preventDefault();
        navigate("/admin");
    } 
    

    if (!product){
        return(
            <section className="h-screen flex justify-center items-center">
                Loading...
            </section>
        )
    }
    const {title, category, price, description, image} = product;

    return (


        <div ref={scrollRef} className="flex justify-center items-center min-h-max animate__animated animate__fadeIn">
            <div className="mt-2 text-center w-full xl:w-[600px] px-6 bg-white border border-gray-200 rounded-lg shadow" >
                <Formik
                    initialValues={{
                        nombre: product.title,
                        descripcion: product.description,
                        imagen: product.image,
                        categoria: product.category,
                        precio: product.price,
                        stock: product.rating.count
                    }}
                    onSubmit={(values) => {
                        console(values)
                    }}
                    validationSchema={schema}
                >
                    {({
                        values, handleChange, handleSubmit, errors , isValid
                    }) => {
                        const requiredFields = ["nombre", "descripcion", "imagen", "categoria", "precio", "stock"];
                        const requiredFieldsFilled = requiredFields.every((field) => values[field] !== "");

            
                        return (
                        <div className="">
                            <div className="sticky">
                                <h1 className="font-bold  font-principal text-3xl text-[#850400]">Editar Producto</h1>
                            </div>
                            <form className="form-body w-full lg:flex lg:justify-center lg:items-start mb-16 py-6 fade-in" onSubmit={handleSubmit}>
                                <div className="font-principal lg:flex lg:flex-col gap-y-2 h-auto lg:w-max border-b py-4 items-center fade-in">
                                        <div className="sticky">
                                            <h1><strong className="font-bold font-principal text-xl" >{title}</strong> </h1>
                                        </div>
                                        <div>
                                            <div className="mx-1 my-2 divInput">
                                                <label className="labelInput font-bold" htmlFor="nombre">Nombre de Producto</label>
                                                <div className="divInput-inputError">
                                                    <input
                                                        className="form-control my-2 w-[100%] xl:w-[400px]"
                                                        onChange={handleChange}
                                                        id="nombre"
                                                        type="text"
                                                        name="nombre"
                                                        value={title}
                                                        placeholder="Nombre"
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
                                                        value={price}
                                                        placeholder="Precio"
                                                    />
                                                    <div className="divInputError text-red-500">
                                                        {errors.precio && <p>{errors.precio}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mx-1 my-2 divInput">
                                                <label className="labelInput font-bold" htmlFor="descripcion">Descripción</label>
                                                <div className="divInput-inputError">
                                                    <textarea
                                                        className="form-control my-2 w-[100%] xl:w-[400px]"
                                                        onChange={handleChange}
                                                        type="text"
                                                        id="descripcion"
                                                        name="descripcion"
                                                        value={description}
                                                        placeholder="Descripcion"
                                                        rows={10}
                                                    />
                                                    <div className="divInputError text-red-500">
                                                        {errors.descripcion && <p>{errors.descripcion}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mx-1 my-2 divInput">
                                                <label className="labelInput font-bold" htmlFor="imagen">Imagen (JPG o JPEG)</label>
                                                <div className="flex w-full justify-center items-center">
                                                    <div className="">
                                                        <img className="w-[100px]" src={image} alt="" />
                                                    </div>
                                                </div>
                                                <div className="divInput-inputError">
                                                    <input
                                                        className="form-control my-2 w-[100%] xl:w-[400px] text-sm xl:text-base"
                                                        onChange={(event) => {
                                                            handleChange(event);
                                                            // Aquí, puedes hacer algo específico si necesitas manipular el archivo seleccionado.
                                                        }}
                                                        type="file"
                                                        id="imagen"
                                                        name="imagen"
                                                        accept=".jpg, .jpeg"
                                                        
                                                    />
                                                    <div className="divInputError text-red-500">
                                                        {errors.imagen && <p>{errors.imagen}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mx-1 my-2 divInput">
                                                <label className="labelInput font-bold" htmlFor="categoria">Categoría</label>
                                                <div className="divInput-inputError">
                                                    <input
                                                        className="form-control my-2 w-[100%] xl:w-[400px]"
                                                        onChange={handleChange}
                                                        type="text"
                                                        id="categoria"
                                                        name="categoria"
                                                        value={category}
                                                    />
                                                    <div className="divInputError text-red-500">
                                                        {errors.categoria && <p>{errors.categoria}</p>}
                                                    </div>
                                                </div>
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
                                                        value={product.rating.count}
                                                    />
                                                    <div className="divInputError text-red-500">
                                                        {errors.stock && <p>{errors.stock}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <div className={`py-4 flex flex-col justify-center mx-2 items-center mb-6 xl:w-[200px] w-[100px] ${
                                                            isValid && requiredFieldsFilled
                                                            ? "bg-green-500 cursor-pointer enabled"
                                                            : "bg-gray-400 disabled"
                                                        } text-white rounded-xl`} type="submit" onClick={handleSubmit}>
                                                        <p className="text-xl">Guardar</p>
                                            </div>
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






/*         <div>
            <form onSubmit={handleSubmit} className="container my5">
                <input onChange={handleInputChange} value={values.nombre} name="nombre" type="text" className="form-control my-2" placeholder="Nombre" />
                <input onChange={handleInputChange} value={values.cantidadAgregada} name="cantidadAgregada" type="number" className="form-control my-2" placeholder="Cantidad del producto por agregar" />

                <button className="btn btn-primary">Enviar</button>
            </form>
        </div> */
    )
}

