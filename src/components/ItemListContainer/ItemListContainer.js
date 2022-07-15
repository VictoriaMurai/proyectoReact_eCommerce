import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore'
import { useAsync } from '../../hooks/useAsync'

const ItemListContainer = ({greeting}) => {

    const { categoryId } = useParams()
    const { isLoading, data, error } = useAsync(() => getProducts(categoryId), [categoryId])

    if(isLoading) {
        return <h1>Cargando...</h1>
    }

    if(error) {
        return <h1>Ha ocurrido un error</h1>
    }

    return (
        <div className='itemListContainer'>
            <h1>{greeting}</h1>

            {data.length > 0
            ? <ItemList products={data}/>
            : <h4>No hay productos para esta categoría</h4>
            }
        </div>
    )
}

export default ItemListContainer