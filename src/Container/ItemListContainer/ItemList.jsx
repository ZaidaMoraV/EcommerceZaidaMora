import React from 'react';
import { Item } from '../../Components/Item';

export const ItemList = ({ products }) => {
    return (
        <div>
        { 
            products.map( element => {
                return (
                    <Item key={element.id} id={element.id} name={element.title} stock={element.available_quantity} 
                    price={element.price} img={element.thumbnail} />
                )
            })
        }
        </div>
    )
}
