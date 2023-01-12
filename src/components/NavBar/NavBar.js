import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'

export const Navbar = () =>{

  return (
    <header className="header">
      <h1 className="header_logo my-4">DYS Cosmetic</h1>

      <nav className="my-4">
        <Link className="header_link" to="/productos">Productos</Link>
        <Link className="header_link" to="/limpieza">Limpieza</Link>
        <Link className="header_link" to="/verduleria">Verduleria</Link>
        <Link className="header_link" to="/carniceria">Carniceria</Link>
        <Link className="header_link" to="/panaderia">Panaderia</Link>
        <Link className="header_link" to="/perfumeria">Perfumeria</Link>
        <CartWidget cartCounter={1} />
      </nav>
    </header>
  )
}