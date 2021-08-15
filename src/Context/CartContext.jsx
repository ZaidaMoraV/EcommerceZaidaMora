import { createContext, useState } from "react";

const CartContext = createContext();
 
function CartProvider ({ children }){

    const [ cart, setCart] = useState([]);
    const [ quantity, setQuantity ] = useState(0);
    const [ total, setTotal ] = useState();

    const addItem = (id, item, cant) => {
        const exist = isInCart(id);
        if (exist){
            const oldItem = cart.find(i => i.id === id);
            const newQuantity = oldItem.amount + cant;
            const newItem = {
                id: oldItem.id,
                title: oldItem.item.title,
                category: oldItem.item.category,
                description: oldItem.item.description,
                imageUrl: oldItem.item.thumbnail,
                stock: oldItem.item.available_quantity,
                price: oldItem.item.price,
                amount: newQuantity
            }
            const cartUpdate = cart.filter(item => item.id =! id);
            const cartNew = [...cartUpdate, newItem];
            setCart(cartNew);
        } else {
            setCart([...cart, { item, quantity }]);
            getTotalPrice();
            getTotalQuantity();
        }
    }

    const removeItem = (id) => {
        const actCart = cart.filter(item => item.id !== id);
        setCart(actCart);
    }

    const clearCart = () => {
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
    const getTotalPrice = () => {
        let total = cart.reduce((acc, cur) => {
            return (cur.item.price * cur.quantity) + acc
        }, 0);
        setTotal(total);
    }

    const getTotalQuantity = () => {
        let total = cart.reduce((acc, cur) => {
            return cur.quantity + acc
        }, 0);
        setQuantity(total);
    }

    return (
        <CartContext.Provider value= {{cart, quantity, total, addItem, removeItem, clearCart}}>
            { children }
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext};
