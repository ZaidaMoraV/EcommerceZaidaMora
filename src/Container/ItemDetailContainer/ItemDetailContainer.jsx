import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if(id){
            async function getDataProduct() {
                const product = await fetch("https://api.mercadolibre.com/items/" + id);
                const apiResult = await product.json();
                setDetail(apiResult);
            }
            getDataProduct();
        }
    }, [id]);

    return (
        <>
        {
            detail === ''
            ? <h1>Cargando</h1>
            : <div>
            {
                <ItemDetail key={detail.id} item={detail} />
            }
            </div>
        } 
        </>
    )
}