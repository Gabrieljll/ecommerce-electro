import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { useLoginContext } from '../../context/LoginContext'

export const Navbar = () =>{
    const { user, logout} = useLoginContext()
    return (
    <header className="header">
      <h1 className="header_logo my-4">DYS Cosmetic</h1>

      <nav className="my-4">
        <Link className="header_link" to="/">Productos</Link>
        <Link className="header_link" to="/productos/limpieza">Limpieza</Link>
        <Link className="header_link" to="/productos/verduleria">Verduleria</Link>
        <Link className="header_link" to="/productos/carniceria">Carniceria</Link>
        <Link className="header_link" to="/productos/panaderia">Panaderia</Link>
        <Link className="header_link" to="/productos/perfumeria">Perfumeria</Link>
        <CartWidget/>
      </nav>
      <div className='header-container'>
        <p className="m-2">Bienvenido {user.email}</p>
        <button className="btn btn-danger m-2" onClick={logout}>Logout</button>
      </div>
    </header>
  )
}