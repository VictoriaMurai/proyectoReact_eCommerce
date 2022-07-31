import './Cart.css'
import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import CartItemList from "../CartItemList/CartItemList"
import { Link, NavLink } from 'react-router-dom'


const Cart = () => {

    const[loading, setLoading] = useState(false)
    const {cart, totalQuantity, getTotal, clearCart} = useContext(CartContext)

    const total = getTotal()

    if(loading){
        return <h1>Se está generando su orden</h1>
    }

    if(totalQuantity === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to='/' className='conoce'>
                    <h3 className='conoce_link'>Conocé nuestros productos</h3>
                </Link>
            </>
        )
    }

    return (
        <>
            <h1>Cart</h1>
            <div>
                <CartItemList productsAdded={cart}/>
                <h3>Total: ${total}</h3>
                <NavLink to='/Checkout' className='botonOrden'>Generar orden</NavLink>                
                <button onClick={() => clearCart()} className='botonOrden'>Limpiar carrito</button>
            </div>
        </>
    )
}

export default Cart