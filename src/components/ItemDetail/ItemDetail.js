import './ItemDetail.css'
import { useState, useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, title, pictureUrl, price, description, stock}) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} ${title}`)
        addItem({id, title, price, quantity})
        setQuantityAdded(quantity)
    }

    return (
            <div className='detalle'>
                <img className='imgItemDetalle' src={pictureUrl} alt={title}/>
                
                <div className='detalle-desc'>
                    <div className='tituloItem'>{title}</div>
                    <div className='text'>$ {price}</div>
                    <div className='text'>{description}</div>
                    <footer className='ItemFooter'>
                    { quantityAdded === 0
                        ?  <ItemCount stock={stock} onAdd={handleOnAdd} />
                        :  <Link to='/cart' className='terminarCompra'>Terminar mi compra</Link>
                    }
                    </footer>
                </div>
            </div>
    )
}

export default ItemDetail