import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pedirItemPorId } from './pedirProductos';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams(); 

    useEffect(() => {
        console.log('ID de producto:', id); 
        pedirItemPorId(Number(id))
            .then((res) => {
                console.log('Resultado de la solicitud:', res); 
                setItem(res);
            })
            .catch((error) => {
                console.error('Error al cargar el detalle del producto:', error); 
            });
    }, [id]);

    return (
        <div>
            {item ? (
                <ItemDetail item={item} />
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}

export default ItemDetailContainer;
