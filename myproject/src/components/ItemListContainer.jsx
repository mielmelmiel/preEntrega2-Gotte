import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getProductos } from '../utils';

function ItemListContainer() {
  //Estados
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  //Efectos
  useEffect(() => {
    const resultado = getProductos();
    resultado.then((productos) => {
      console.log('Termino de traerse productos');
      setProductos(productos);
      setLoading(false);
    });
  }, []);
  console.log(productos);

  //Vista
  if (loading) return <p>cargando...</p>;

  return <ItemList productos={productos} />;
}

export default ItemListContainer;
