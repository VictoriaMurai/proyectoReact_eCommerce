import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='cartContainer'>
            <button>
                <img src='/images/shopping-cart.png' alt='Cart-Widget' className='cart'/>
            </button>
        </div>
    )
}

export default CartWidget