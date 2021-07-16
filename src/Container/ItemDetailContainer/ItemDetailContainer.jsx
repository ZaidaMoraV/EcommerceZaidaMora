import { useEffect, useState } from "react";
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
    console.log('Into detail');
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        async function getDataProduct() {
            const product  = await fetch("https://api.mercadolibre.com/sites/MLC/search?q=Libros%20Revistas%20y%20Comics");
            const apiResult = await product.json();
            console.log ("aquí");
            setDetail(apiResult);
            
        }
        getDataProduct();
    }, [])
    return (
        <>
            <section>
                {
                    <ItemDetail key={detail.id} name={detail.title} price={detail.price} img={detail.thumbnail} />
                }
                
            </section>
        </>
    )
}