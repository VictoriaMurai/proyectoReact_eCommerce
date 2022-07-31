import './Checkout.css'
import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import { Link, useNavigate } from 'react-router-dom'
import { addDoc, collection, writeBatch, getDocs, query, where, documentId, Timestamp } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { useNotification } from "../../notification/Notification"

const Checkout = () => {

    const {cart, getTotal, clearCart} = useContext(CartContext)
    const[loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState ({
        name: '',
        email: '',
        phone: '',
        address: ''
    })

    const handleChange = (evt) => {
        const { target } = evt;
        const { name, value } = target;
        setFormValues({...formValues, [name]: value})
    }

    const total = getTotal()

    const setNotification = useNotification()

    const handleSubmit = (evt) => {
        handleCreateOrder();
    };
    

    const handleCreateOrder = () => {
        debugger

        const objOrder = {
            buyer: {
                name: formValues.name,
                email: formValues.email,
                phone: formValues.phone,
                address: formValues.address
            },

            items: cart,
            date: Timestamp.fromDate(new Date()),
            total: total
        }

        const batch = writeBatch(db)

        const ids = cart.map(prod => prod.id)

        const outOfStock = []

        const collectionRef = collection(db, 'products')

        setLoading(true)

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
                    setLoading(false)
                    batch.commit()
                    clearCart()
                    setNotification('success',`Su orden se genero correctamente. El id de su orden es: ${id}`)
                    navigate("/")
                    setFormValues({
                        name: '',
                        email: '',
                        phone: '',
                        address: ''
                    })
            }).catch(error => {
                if(error.type === 'out_of_stock'){
                    setLoading(false)
                    setNotification('error',`Hay uno o más productos sin stock`)
                    clearCart()
                    navigate("/")
                    setFormValues({
                        name: '',
                        email: '',
                        phone: '',
                        address: ''
                    })
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

    return (
        <>
            <form className="formContainer_form">
                <input
                    className="formInput"
                    type="text"
                    placeholder="Nombre y Apellido"
                    onChange={handleChange}
                    name="name"
                    value={formValues.name}
                />
                <input
                    className="formInput"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formValues.email}
                /> 
                <input
                    className="formInput"
                    type="text"
                    placeholder="Teléfono"
                    onChange={handleChange}
                    name="phone"
                    value={formValues.phone}
                /> 
                <input
                    className="formInput"
                    type="text"
                    placeholder="Dirección"
                    onChange={handleChange}
                    name="address"
                    value={formValues.address}
                />
                <div>
                    {total ? <Link to='/'><button onClick={() => handleSubmit()} className= "submitForm">Realizar compra</button></Link> : ''}
                </div>
            </form>

            <h3 className="cart-total">Total: ${total}</h3> 
        </>
    )
}

export default Checkout