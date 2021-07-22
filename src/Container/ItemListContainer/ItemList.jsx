import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => {

    return (
        <div>

        { products.map( element => <Item key={element.id} name={element.title}
                price={element.price} img={element.thumbnail} />)
        }
        </div>
    )
}
export default ItemList