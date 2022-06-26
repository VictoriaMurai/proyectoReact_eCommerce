import './CartItem.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'


const CartItem = ({id, title, quantity, price}) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div className='cartItems'>

            <h3 className='cartItem'>{title}</h3>
            <p className='cartItem'>Cantidad: {quantity}</p>
            <p className='cartItem'>Precio por unidad: ${price}</p>
            <p className='cartItem'>Subtotal: ${price * quantity}</p>

            <button className='ButtonCartItem' onClick={() => handleRemove(id)}>Quitar del carrito</button>
        </div>
    )
}

export default CartItem