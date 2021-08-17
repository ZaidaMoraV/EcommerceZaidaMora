import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([]);
    const { id } = useParams();
    console.log("id : " + id);

    useEffect(() => {
        if(id){
            async function getDataProduct() {
                const db = getFirestore();
                const document = db.collection('products');
                const product = document.doc(id);
                product.get().then((i) => {
                    setDetail({ id:i.id, ...i.data() });
                })
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