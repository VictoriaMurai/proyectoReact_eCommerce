import { useState, useEffect, createContext } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    console.log(cart)

    useEffect(() => {
        let totalQuantity = 0
        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })
        setTotalQuantity(totalQuantity)
    }, [cart])
    
    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd)) {
        setCart([...cart, productToAdd])
        }
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)

        setCart(cartWithoutProduct)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getCartQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })

        return total
    }

    return(
        <CartContext.Provider value={{cart, totalQuantity, addItem, removeItem, isInCart, getCartQuantity, clearCart, getTotal}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext