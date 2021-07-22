import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = ({ greenting, products }) => {
    const [listProducts, setListProducts] = useState([]);

    const { id } = useParams()

    useEffect(() => {
        console.log (id);

        async function getDataFromBooks() {
            const result = await fetch("https://api.mercadolibre.com/sites/MLC/search?q=Libros%20Revistas%20y%20Comics");
            console.log(result);
            const data = await result.json();
            setListProducts(data.results);
            console.log("aqui");
        }
        getDataFromBooks();
        }, [id, products])

 
    return (
        <section>
        <h2>{greenting}</h2>
            { <ItemList products ={listProducts}/> }
        </section>
    )

}

export default ItemListContainer

