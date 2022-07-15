import './Item.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../App'

const Item = ({id, pictureUrl, title, price}) => {

    return (
        <li>
            <div className='Item'>
                <img className='imgItem' src={pictureUrl} alt={title}/>

                <div className='ItemDesc'>
                    <div>{title}</div>
                    <div>${price}</div>
                    {/*<div>{CartContext}</div>*/}
                </div>

                <div className='divButtons'>
                    <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
                </div>

            </div>
        </li>
    )
}

export default Item