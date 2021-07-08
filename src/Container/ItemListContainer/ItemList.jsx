import { useEffect, useState } from "react";
import { Item } from "./Item";

export const ItemList = () => {
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        async function getDataFromBooks() {
            const result = await fetch("https://api.mercadolibre.com/sites/MLC/search?q=libros");
            console.log (result);
            const data = await result.json();
            setListProducts(data.results);
            console.log ("aqui");
        }
        getDataFromBooks();
    }, [])
    return (
        <>
            <section>
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
