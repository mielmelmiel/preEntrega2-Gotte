import { useNavigate, useParams } from 'react-router-dom';

function ItemList(props) {
  // const navigate = useNavigate();
  // const detailId = useParams();
  // console.log(detailId);

  // const handleNavigation = (id) => {
  //   navigate(`./detalle/${id}`);
  // };
  return (
    <section className='card-container'>
      {props.productos.map((item, index) => {
        return (
          <article
            key={index}
            className='card'
            // onClick={handleNavigation(detailId.id)}
          >
            <h2 className='card__title'>
              {item.title} - ${item.price}
            </h2>
            <img className='card__image' src={item.image} alt={item.title} />
            <button className='btn'>ver mas</button>
          </article>
        );
      })}
    </section>
  );
}
export default ItemList;
