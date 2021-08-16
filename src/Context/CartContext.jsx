import { useEffect } from "react";
import { createContext, useState } from "react";

const CartContext = createContext();
 
function CartProvider ({ children }){

    const [cart, setCart] = useState([]);
    const [quantity, setQuantity ] = useState(0);
    const [total, setTotal ] = useState(0);

    useEffect(() => {
        var total = 0
        const totalPrice = cart.map( p => ({price : p.price * p.amount}))
        totalPrice.map( p => total = total + p )

        const sumaPrice = totalPrice.reduce((prev, next) => prev + next.price, 0);
        setTotal(sumaPrice)

        const totalProducts = cart.reduce((prev, next) => prev + next.amount, 0);
        setQuantity(totalProducts)
    }, [cart])

    const addItem = (id, item, cant) => {
        const exist = isInCart(id);
        if (exist){
            const oldItem = cart.find(i => i.id === id);
            const newQuantity = oldItem.amount + cant;
            const newItem = {
                id: oldItem.id,
                title: oldItem.title,
                category: oldItem.category,
                description: oldItem.description,
                imageUrl: oldItem.imageUrl,
                stock: oldItem.stock,
                price: oldItem.price,
                amount: newQuantity
            }
            const cartUpdate = cart.filter(item => item.id =! id);
            const cartNew = [...cartUpdate, newItem];
            setCart(cartNew);
        } else {
            const newItem = {
                id: item.id,
                title: item.title,
                category: item.category,
                description: item.description,
                imageUrl: item.imageUrl,
                stock: item.available_quantity,
                price: item.price,
                amount: cant
            }
            setCart([...cart, newItem]);
        }
    }

    const removeItem = (id) => {
        const actCart = cart.filter(item => item.id !== id);
        setCart(actCart);
    }

    const clearCart = () => {
        console.log("clearCart ...");
        setCart([]);
        setQuantity(0);
        setTotal(0);
    }

    const isInCart = (id) => {
        const val = cart.find(i => i.id === id);
        if (val === undefined){
            return false;
        } else {
            return true;
        }
    }

    return (
        <CartContext.Provider value= {{cart, quantity, total, addItem, removeItem, clearCart}}>
            { children }
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext};
