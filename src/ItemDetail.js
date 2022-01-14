import ItemCount from "./ItemCount"
import { useContexto } from "./miContexto"

const ItemDetail = ({ producto }) => {

    const { agregarAlCarrito } = useContexto()


    const onAdd = (cantidad) => {
        agregarAlCarrito(cantidad,producto)
    }

    return (
        <div>
            <h1>Detalle de producto</h1>
            <img src={producto.imagen}/>
            <p>Nombre: {producto.title}</p>
            <p>Precio: ${producto.precio}</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )

}

export default ItemDetail
