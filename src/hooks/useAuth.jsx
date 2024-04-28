// useAuth.js
import { useState, useEffect } from "react";
import jwt from "jsonwebtoken"; // Importa la biblioteca jsonwebtoken

export const useAuth = () => {
const jwt_secret = process.env.REACT_APP_SECRET_JSONWEBTOKEN
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    
  
    if (token) {
      try {
/*         const decoded = jwt.verify(token, jwt_secret);
        setUser(decoded.user); */
        setUser(token);
      } catch (error) {
        console.error("Error al verificar el token:", error.message);
        console.error("Error object:", error);
        // Puedes manejar el error de manera adecuada, por ejemplo, desloguear al usuario.
        // setUser(null);
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return { user, logout };
};
