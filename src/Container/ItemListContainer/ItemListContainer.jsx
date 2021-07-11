import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "./Item";

export const ItemListContainer = ({ greenting }) => {
    const [listProducts, setListProducts] = useState([]);

    const { id } = useParams()

    useEffect(() => {
        console.log (id);

        async function getDataFromBooks() {
            const result = await fetch("https://api.mercadolibre.com/sites/MLC/search?q=Libros,%20Revistas%20y%20Comics"+id);
            console.log(result);
            const data = await result.json();
            setListProducts(data.results);
            console.log("aqui");
        }
        getDataFromBooks();
        }, [id])

 
    return (

        <>
            <section>
            <h2>{greenting}</h2>
                {
                    listProducts.map(element => {
                        return (
                            <Item key={element.id} name={element.title} price={element.price} img={element.thumbnail} />
                        )
                    })
                }
            </section>
            
        </>
    )

}


export default ItemListContainer

