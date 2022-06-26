import { useContext } from "react"
import CartContext from "../../context/CartContext"
import CartItemList from "../CartItemList/CartItemList"
import { Link } from 'react-router-dom'


const Cart = () => {

    const {cart, totalQuantity, getTotal, clearCart} = useContext(CartContext)

    const total = getTotal()

    if(totalQuantity === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to='/'>
                    <h3>Conocé nuestros productos</h3>
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
                <button>Generar orden</button>
                <button onClick={() => clearCart()}>Limpiar carrito</button>
            </div>
        </>
    )
}

export default Cart