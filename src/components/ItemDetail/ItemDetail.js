import './ItemDetail.css'

const ItemDetail = ({id, title, pictureUrl, price, description}) => {
    return (
            <div className='detalle'>
                <img className='imgItemDetalle' src={pictureUrl} alt={title}/>
                
                <div className='detalle-desc'>
                    <div className='tituloItem'>{title}</div>
                    <div className='text'>$ {price}</div>
                    <div className='text'>{description}</div>
                </div>
            </div>
    )
}

export default ItemDetail