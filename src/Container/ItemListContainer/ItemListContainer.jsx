import { ItemList } from "./ItemList"


export function ItemListContainer({ greenting }) {
    console.log('---> into ItemList');
    return (
        <>
            <section>

                <h2>{greenting}</h2>

                <ItemList />

            </section>

        </>
    )
    
}


export default ItemListContainer

