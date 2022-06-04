import './Item.css'

const Item = ({pictureUrl, title, price}) => {
    return (
        <li>
            <div className='Item'>
                <img className='imgItem' src={pictureUrl} alt={title}/>
                <div className='ItemDesc'>
                    <div>{title}</div>
                    <div>{price}</div>
                </div>
                <button className='botonAgregar'>Agregar al carrito</button>
            </div>
        </li>
    )
}

export default Item