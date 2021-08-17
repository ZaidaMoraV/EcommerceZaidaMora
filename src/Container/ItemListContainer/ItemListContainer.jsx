import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import { ItemList } from "./ItemList";

export const ItemListContainer = ({ greenting }) => {
    const [listProducts, setListProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            async function getDataCategorias() {
                const db = getFirestore();
                const collection = db.collection('products');
                const categories = await collection.where("category_id","==",id).get();
                console.log(categories.docs.map(element => element.data()));
                const aux = categories.docs.map( p => {
                    return { id: p.id, ...p.data()}
                });
                setListProducts(aux);
            }
            getDataCategorias();

        } else {
            async function getDataFromBooks() {
                const db = getFirestore();
                const collection = db.collection('products');
                const categories = await collection.get();
                console.log(categories.docs.map(element => element.data()));
                const aux = categories.docs.map( p => {
                    return { id: p.id, ...p.data() }
                });
                setListProducts(aux);
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
