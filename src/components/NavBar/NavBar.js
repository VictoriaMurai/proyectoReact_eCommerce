import './NavBar.css'
import LogoViaVinera from "../LogoViaVinera/LogoViaVinera"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className='NavBar'>

            <div className='logo-menu'>

            <LogoViaVinera />

            <div className='menu'>
                <button className='menu-item'>Mermeladas</button>
                <button className='menu-item'>Conservas</button>
                <button className='menu-item'>Licores</button>
                <button className='menu-item'>Desayunos</button>
            </div>

            </div>

            <CartWidget />

        </nav>
    )
}

export default NavBar