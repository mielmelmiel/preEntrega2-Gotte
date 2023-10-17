function ItemDetail(props) {
    return (
        <section className="card-container">
        {props.productos.map((item) => {
            return (
            <article className="card">
                <h2 className="card__title">{item.title} - ${item.price}</h2>
                <img className="card__image" src={item.image} alt={item.title} />
                <button className="btn">ver mas</button>
            </article>
            )
        })}
        </section>
    )
    }
    export default ItemDetail

    /*
    export function getProductos() {
    console.log("Get Productos...")

    return fetch('https://fakestoreapi.com/products')
        .then((respuesta) => {

            if (respuesta.status < 400) {
                console.log("termino el pedido bien")
            } else {
                console.log("termino el pedido mal")
            }

            const datos = respuesta.json()
            return datos

        })
        .then((respuesta) => {
            return respuesta
        })
        .catch((error) => {
            console.log("termino el pedido mal")
            console.log(error)
        })

}

export default ItemDetailContainer; */