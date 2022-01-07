import ItemCount from "./ItemCount"
import { useContexto } from "./miContexto"

const ItemDetail = ({ producto }) => {

    //const [mostrar,setMostrar] = useState(true)
    const { agregarAlCarrito } = useContexto()


    const onAdd = (cantidad) => {
        console.log("Soy onAdd desde ItemListContainer")
        console.log("Cantidad de items: " + cantidad)
        //setCantidad(cantidad)
        agregarAlCarrito(cantidad,producto)
    }

    return (
        <div>
            <h1>Detalle de producto</h1>
            <p>Nombre: {/* producto.nombre */}</p>
            <p>Precio: ${/* producto.precio */}</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )

}

export default ItemDetail
