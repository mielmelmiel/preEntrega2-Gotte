import { useState, useEffect } from "react";
import { getProductos } from "../utils";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  //Estados
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  //Efectos
  useEffect(() => {
    const resultado = getProductos();
    resultado.then((productos) => {
      console.log("Termino de traerse productos");
      setProductos(productos);
      setLoading(false);
    });
  }, []);

  //Vista
  if (loading) return <p>cargando...</p>;

  return <ItemDetail productos={productos} />;
}

export default ItemDetailContainer;
