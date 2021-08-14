import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";

export const ItemListContainer = ({ greenting }) => {
    const [listProducts, setListProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        console.log("id categoria : " + id);

        if (id) {
            console.log("Llego un id categoria");
            async function getDataCategorias() {
                const result = await fetch("https://api.mercadolibre.com/sites/MLC/search?category="+id);
                console.log(result);
                const data = await result.json();
                setListProducts(data.results);
                console.log("listado");
            }
            getDataCategorias();

        } else {
            console.log("Todas las categorias");
            async function getDataFromBooks() {
                const result = await fetch("https://api.mercadolibre.com/sites/MLC/search?q=Libros%20Revistas%20y%20Comics");
                console.log(result);
                const data = await result.json();
                setListProducts(data.results);
            }
            getDataFromBooks();
        }
    }, [id]);

    return (
        <section>
            <h4>{greenting}</h4>
            <ItemList products={listProducts} />
        </section>
    )

}
