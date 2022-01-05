import { Link } from "react-router-dom";

const Item = ({ item }) => {

    return (
        <article className="item">
            <h3>{item.title}</h3>
            <img src={item.image} alt="thumbnail" />
            <p>Precio : ${item.price}</p>
            <Link to={`/producto/${item.id}`}>ver detalle</Link>
        </article>
    )
}

export default Item
