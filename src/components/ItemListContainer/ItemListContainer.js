import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState ([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

console.log(products)

    return (
        <div className='itemListContainer'>
            <h1>{greeting}</h1>

            {<ItemList products={products}/>}
        </div>
    )
}

export default ItemListContainer