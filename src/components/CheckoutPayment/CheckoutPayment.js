
import React, { useState, useContext, useEffect } from "react"
import { Link, useNavigate} from "react-router-dom"
/* import { db } from "../../firebase/config" */
/* import { collection, writeBatch, documentId, query, getDocs, addDoc, where} from "firebase/firestore" */
import * as Yup from 'yup'
import "./CheckoutPayment.css"
import {CartContext} from '../../context/CartContext'
/* import { SiMercadopago } from "react-icons/si"; */
import axios from "axios";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'




const mercadoPagoImg = "/images/hero/Mercado-Pago-Logo.png"
const telefonoRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = Yup.object().shape({
    nombre: Yup.string().min(4, 'Mínimo 4 caracteres').max(30, 'Máximo 30 caracteres').required('Este campo es requerido'),
    apellido: Yup.string().min(4, 'Mínimo 4 caracteres').max(30, 'Máximo 30 caracteres').required('Este campo es requerido'),
    direccion: Yup.string().min(8, 'Mínimo 8 caracteres').max(40, 'Máximo 40 caracteres').required('Este campo es requerido'),
    localidad: Yup.string().min(8, 'Mínimo 8 caracteres').max(40, 'Máximo 40 caracteres').required('Este campo es requerido'),
    telefono: Yup.string().matches(telefonoRegExp, 'El número de telefono no es válido').required('Este campo es requerido'),
    email: Yup.string().email('El email no es válido').required('Este campo es obligatorio')
})


export const CheckoutPayment = () => {
    const { cart, total, clearCart} = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    const [preferenceId, setPreferenceId] = useState(null);
    const [isBuyButtonVisible, setBuyButtonVisibility] = useState(true);

    const publicKey = process.env.REACT_APP_MP_PUBLIC_KEY;
    const urlBack = process.env.REACT_APP_URL_BACK;
    const navigate = useNavigate();
    initMercadoPago(publicKey, {locale: "es-AR"});

    useEffect(() => {
        // Ejecutar la función al cargar el componente
        checkAndCreatePreference();
      }, []); // El segundo argumento vacío indica que este efecto se ejecuta solo una vez al montar el componente
    
/*     const createOrder = async(values) => {

        const orden = {
            cliente: values,
            items: cart,
            total: total
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")

        const outOfStock = []

        const itemsRef = query(productosRef, where(documentId(), 'in', cart.map(prod => prod.id)))

        const productos = await getDocs(itemsRef)

        productos.docs.forEach(doc => {
            const item = cart.find(item => item.id === doc.id)
            if(doc.data().stock >= item.cantidad){
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0){
            batch.commit()
                .then( () => {
                    addDoc(ordersRef, orden)
                        .then( (doc)=>{ 
                            setOrderId(doc.id)
                            clearCart()
                        })
                        .catch((error) => console.log(error))
                })
        } else {
            alert("Hay Items sin stock")
        }
    } */

    const checkAndCreatePreference = async () => {
        // Verificar que haya datos de usuario y elementos en el carrito en el localStorage
        const user = JSON.parse(localStorage.getItem('checkoutData'));
        if (user && cart.length > 0) {
            const id = await createPreference();
            if (id) {
                setPreferenceId(id);
            }
        } else {
            // Redirigir o realizar otra acción en caso de que no haya datos de usuario o carrito vacío
            volverAlInicio();
        }
    };

    if (orderId){
        return (
            <div className="container my-5 checkout-body">
                <h2>Tu compra ha sido exitosa</h2>
                <hr/>
                <p>Tu código de orden es: {orderId}</p>
                <Link className="btn btn-primary" to="/home">Volver</Link>
            </div>
        )
    }
    const volverAlInicio = () => {
        navigate("/cart");
    }

    if ( cart.length === 0 ) {
        volverAlInicio()
    }


    const createPreference = async () => {
        try {
            const cartJsonArray = JSON.parse(localStorage.getItem('cart'))
            
            const response = await axios.post(urlBack+"/create_preference", cartJsonArray);
    
            const { id } = response.data;
            return id;
        } catch (error) {
            console.log(error);
        }
      };

      const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id);
          }
      };
    


    return (
            <div className="self-center w-auto xl:w-auto my-16 p-6 flex justify-center items-center">
                <div className="xl:m-0 text-center w-auto justify-center flex flex-col p-4 animate__animated animate__fadeIn">

                    {/* Texto sobre mercado pago */}
                    <div className="font-principal flex flex-col justify-center items-center text-center">
                        <h1 className="text-xl">Queremos garantizar seguridad por lo que ofrecemos</h1>
                        <h1 className="text-xl"><strong>Mercado Pago</strong> como intermediario para realizar la compra</h1>
                        <h1 className="text-xl">De esta forma elegis cualquiera de sus medios de pago</h1>
                        <img className="w-[300px] xl:w-[500px]" src={mercadoPagoImg} alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="">
                            
                        {preferenceId &&   <Wallet initialization={{ preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} /> }
                            
                        </div>
                        <div className="sticky cursor-pointer p-3 bg-red-500 w-[280px] text-white flex justify-center items-center font-medium">
                            <p>Cancelar</p>
                        </div>
                        {/* <Link className="btn btn-danger" to="/home">Cancelar</Link> */}
                    </div>
                </div>
            </div>

    )
}