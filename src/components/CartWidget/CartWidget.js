import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const {getCartQuantity} = useContext(CartContext)

    const totalQuantity = getCartQuantity()


    if (totalQuantity === 0) {
            return <div></div>
    }

    return (
        <div className='cartContainer'>
            <Link to='/cart'>
                <img src='/images/shopping-cart.png' alt='Cart-Widget' className='cart'/>
                {totalQuantity}
            </Link>
        </div>
    )
}

export default CartWidget