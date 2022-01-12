import { Link } from "react-router-dom"
import { useContexto } from "./miContexto"

const Carrito = () => {

    const { carrito, borrarDelCarrito, limpiarCarrito } = useContexto()

    const finalizarCompra = () => {
        console.log("Guardando la compra en la db...")
        limpiarCarrito()
    }


    return (
        <div>
            Soy Carrito
            {carrito.length > 0 ? (
                <ul>
                    {carrito.map((producto, indice) => {
                        return (
                            <li key={indice}>
                                {producto.nombre} - ${producto.precio}
                                <button onClick={()=>borrarDelCarrito(producto.id,producto.cantidad)}>borrar</button>
                            </li>
                        )
                    })}
                </ul>
            ) : <p>No hay productos en el carrito</p>}

            <button onClick={finalizarCompra}>finalizar compra</button>
        </div>
    )
}

export default Carrito