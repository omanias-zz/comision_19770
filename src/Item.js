import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <article className="item">
            <h3>{item.nombre}</h3>
            <img src={item.img} alt="thumbnail" />
            <p>Precio : ${item.precio}</p>
            <Link to={`/producto/${item.id}`}>ver detalle</Link>
        </article>
    )
}

export default Item
