/*const orderCheckout = setOrder() => {
}*/

import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import CartItemList from "../CartItemList/CartItemList"
import { Link, NavLink } from 'react-router-dom'
import { addDoc, collection, updateDoc, doc, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { useNotification } from "../../notification/Notification"

const Checkout = () => {

    const[loading, setLoading] = useState(false)
    const {cart, totalQuantity, getTotal, clearCart} = useContext(CartContext)

    const total = getTotal()

    const setNotification = useNotification()

    const handleCreateOrder = () => {
        setLoading(true)

        const objOrder = {
            buyer: {
                name: 'John Doe',
                email: 'johndoe@hotmail.com',
                phone: '123456789',
                address: 'Dirección 123'
            },

            items: cart,
            total: total
        }

        const batch = writeBatch(db)

        const ids = cart.map(prod => prod.id)

        const outOfStock = []

        const collectionRef = collection(db, 'products')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
        .then(response => {
            response.docs.forEach(doc => {
                const dataDoc = doc.data()
                const prod = cart.find(prod => prod.id === doc.id)
                const prodQuantity = prod.quantity

                if(dataDoc.stock >= prodQuantity) {
                    batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                }
                else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })
        }).then(() => {
            if(outOfStock.length === 0) {
                const collectionRef = collection(db, 'orders')
                return addDoc(collectionRef, objOrder)
                }
            else{
                return Promise.reject({ type: 'out_of_stock', products: outOfStock})
            }
            }).then(({ id }) => {
                    batch.commit()
                    clearCart()
                    setNotification('success',`Su orden se genero correctamente. El id de su orden es: ${id}`)
            }).catch(error => {
                if(error.type === 'out_of_stock'){
                    setNotification('error',`Hay uno o más productos sin stock`)
                }
                else{
                    console.log(error)
                }
            }).finally(() => {
                setLoading(false)
            })
    }

    if(loading){
        return <h1>Se está generando su orden</h1>
    }

    if(totalQuantity === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to='/'>
                    <h3>Conocé nuestros productos</h3>
                </Link>
            </>
        )
    }

    return (
        <>
            <form class="formContainer__form" action="https://formspree.io/f/xgedopga" method="post">
                
                <div class="nombre-form form-floating">
                    <input class="form-control" type="text" name="nombre" id="floatingInput" placeholder="Nombre y apellido"/>
                </div>
                <div class="apellido-form form-floating">
                    <input class="form-control" type="text" name="apellido" id="floatingInput" placeholder="email"/>
                </div>
                <div class="email-form form-floating">
                    <input class="form-control" type="mail" name="mail" required id="floatingInput" placeholder="Teléfono"/>
                </div>
                <div class="email-form form-floating">
                    <input class="form-control" type="mail" name="mail" required id="floatingInput" placeholder="Dirección"/>
                </div>
                <input onClick={() => handleCreateOrder()} class= "enviar-form" type="submit" value="Enviar formulario" name="" id=""/>
            </form>
        </>
    )
}

export default Checkout