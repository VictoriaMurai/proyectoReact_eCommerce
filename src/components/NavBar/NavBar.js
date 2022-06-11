import './NavBar.css'
import LogoViaVinera from "../LogoViaVinera/LogoViaVinera"
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='NavBar'>

            <div className='logo-menu'>

            <Link to='/'>
                <LogoViaVinera />
            </Link>

            <div className='menu'>
                <NavLink to='/category/mermeladas' className={({isActive}) => isActive ? 'menu-item-active' : 'menu-item'}>Mermeladas</NavLink>
                <NavLink to='/category/conservas' className={({isActive}) => isActive ? 'menu-item-active' : 'menu-item'}>Conservas</NavLink>
                <NavLink to='/category/licores' className={({isActive}) => isActive ? 'menu-item-active' : 'menu-item'}>Licores</NavLink>
                <NavLink to='/category/desayunos' className={({isActive}) => isActive ? 'menu-item-active' : 'menu-item'}>Desayunos</NavLink>
            </div>

            </div>

            <CartWidget />

        </nav>
    )
}

export default NavBar