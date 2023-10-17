import React, { useEffect, useState } from 'react';
import { pedirProductos } from './pedirProductos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria;

  useEffect(() => {
    pedirProductos().then((res) => {
      if (categoria) {
        setProductos(res.filter((prod) => prod.categoria === categoria));
        setTitulo(categoria);
      } else {
        setProductos(res);
        setTitulo("Productos");
      }
    });
  }, [categoria]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
}

export default ItemListContainer;
