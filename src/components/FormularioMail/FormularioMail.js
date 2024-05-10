import { useEffect, useState, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useToaster } from 'react-hot-toast';
import "../../styles/animate.min.css";
import { enviarConsultaMailRequest } from "../../api/productos.api";

export const FormularioMail = () => {
  const [isMailSent, setIsMailSent] = useState(false);
  const toast = useToaster();
  const formRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      nya: '',
      email: '',
      asunto: '',
      mensaje: '',
    },
    validationSchema: Yup.object({
      nya: Yup.string().required('Este campo es requerido'),
      email: Yup.string().email('Ingresa un correo electrónico válido').required('Este campo es requerido'),
      asunto: Yup.string().required('Este campo es requerido'),
      mensaje: Yup.string().required('Este campo es requerido'),
    }),
    onSubmit: async (values) => {
      try {
        await enviarConsultaMailRequest(values);
        setIsMailSent(true);
        toast.success('Correo enviado con éxito');
      } catch (error) {
        console.error('Error al enviar el correo:', error);
        toast.error('Error al enviar el correo');
      }
    },
  });

  useEffect(() => {
    // Agrega scroll al cargar
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const resetFormTimeout = setTimeout(() => {
      setIsMailSent(false);
      formik.resetForm();
    }, 5000);

    return () => clearTimeout(resetFormTimeout);
  }, [isMailSent, formik]);

  return (
    <main className="animate__animated animate__fadeIn" ref={formRef}>
      <div className="container mx-auto flex flex-wrap items-start mt-8">
        <div className="w-full pl-2 pr-2 mb-4 mt-4">
          <h1 className="text-3xl font-extrabold text-center">Envianos tu consulta</h1>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2">
          {/* Formulario */}
          <form className="bg-white px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <div className="grid grid-flow-row sm:grid-flow-col gap-3">
                <div className="sm:col-span-4 justify-center">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nya"> Nombres y Apellidos </label>
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-solid ${formik.touched.nya && formik.errors.nya ? 'border-red-500' : ''}`}
                    id="nya"
                    type="text"
                    placeholder="Carlos Torres"
                    {...formik.getFieldProps('nya')}
                  />
                  {formik.touched.nya && formik.errors.nya && (
                    <p className="text-red-500 text-xs italic">{formik.errors.nya}</p>
                  )}
                </div>
                <div className="sm:col-span-4 justify-center">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"> Email </label>
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-solid ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                    id="email"
                    type="email"
                    placeholder="ctorres@mail.com"
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="asunto"> Asunto </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-solid ${formik.touched.asunto && formik.errors.asunto ? 'border-red-500' : ''}`}
                id="asunto"
                type="text"
                placeholder="Venta de Productos"
                {...formik.getFieldProps('asunto')}
              />
              {formik.touched.asunto && formik.errors.asunto && (
                <p className="text-red-500 text-xs italic">{formik.errors.asunto}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mensaje"> Mensaje </label>
              <textarea
                className={`shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.mensaje && formik.errors.mensaje ? 'border-red-500' : ''}`}
                id="mensaje"
                rows="5"
                placeholder="El mensaje"
                {...formik.getFieldProps('mensaje')}
              ></textarea>
              {formik.touched.mensaje && formik.errors.mensaje && (
                <p className="text-red-500 text-xs italic">{formik.errors.mensaje}</p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="shadow-slate-300 text-base button shadow-md py-3"
                disabled={formik.isSubmitting}
              >
                <h6>Enviar</h6>
              </button>
            </div>
          </form>

          {isMailSent && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4" role="alert">
              <strong className="font-bold">¡Correo enviado con éxito!</strong>
              <span className="block sm:inline"> Tu mensaje ha sido enviado correctamente.</span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
