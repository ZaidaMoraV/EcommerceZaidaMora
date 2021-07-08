import { useEffect, useState } from "react";
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
    console.log('Into detail');
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        async function getDataProduct() {
            const product  = await fetch("https://api.mercadolibre.com/items/MLC523398615");
            const apiResult = await product.json();
            console.log ("apiResult " + apiResult.id);
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