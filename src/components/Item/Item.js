import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({pictureUrl, title, price, id}) => {
    return (
        <li>
            <div className='Item'>
                <img className='imgItem' src={pictureUrl} alt={title}/>

                <div className='ItemDesc'>
                    <div>{title}</div>
                    <div>$ {price}</div>
                </div>

                <div className='divButtons'>
                    <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
                    <button className='botonAgregar'>Agregar al carrito</button>
                </div>

            </div>
        </li>
    )
}

export default Item