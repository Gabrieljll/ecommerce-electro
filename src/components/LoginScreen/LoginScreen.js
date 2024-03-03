import "./LoginScreen.css";
import { useLoginContext } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {loginRequest} from "../../api/productos.api"

const LoginScreen = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      password: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre es requerido"),
      password: Yup.string().required("La contraseña es requerida"),
    }),
    onSubmit: async (values) => {
        try {
          const response = await loginRequest(values);
          if (response.data.token) {
            // Guarda el token en localStorage o en tu estado de aplicación
            // Aquí asumo que el token está en response.data.token
            localStorage.setItem("token", response.data.token);
      
            // Navega a la vista del admin
            navigate("/admin");
          } else {
            // Maneja el caso en el que el servidor no devuelva un token
            console.error("El servidor no devolvió un token");
          }
        } catch (error) {
          console.error("Error en la autenticación:", error);
        }
      },
  });

  return (
    <div className="login-screen">
      <div className="login">
        <hr />
        <form className="flex justify-center items-center" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col justify-around items-center">
        <label className="labelInput font-bold" htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className={`form-control my-2 ${
              formik.touched.nombre && formik.errors.nombre
                ? "is-invalid"
                : ""
            }`}
            value={formik.values.nombre}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="nombre"
          />
          {formik.touched.nombre && formik.errors.nombre && (
            <div className="invalid-feedback">{formik.errors.nombre}</div>
          )}
        <label className="labelInput font-bold" htmlFor="password">Clave</label>
          <input
            type="password"
            className={`form-control my-2 ${
              formik.touched.password && formik.errors.password
                ? "is-invalid"
                : ""
            }`}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="password"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="invalid-feedback">{formik.errors.password}</div>
          )}
                  <div>
          <button className="btn btn-primary h-[50px] w-[100px] border-2 font-[Arimo-Regular] bg-[#3165bf] text-white" type="submit">
            Ingresar
          </button>
        </div>
    </div>

        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
