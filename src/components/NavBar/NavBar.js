import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'

export const Navbar = () =>{

  return (
    <header className="header">
      <h1 className="header_logo">DYS Cosmetic</h1>

      <nav>
        <a className="header_link" href="#">Cuidado Facial</a>
        <a className="header_link" href="#">Cuidado Corporal</a>
        <a className="header_link" href="#">Cuidado Capilar</a>
        <a className="header_link" href="#">Maquillaje</a>
        <CartWidget cartCounter={1} />
      </nav>
    </header>
  )
}