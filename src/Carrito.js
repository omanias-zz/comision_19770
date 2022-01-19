import { Link } from "react-router-dom"
import { useContexto } from "./miContexto"
import { addDoc, collection , serverTimestamp , updateDoc } from "firebase/firestore"
import { db } from "./firebase"
import Formulario from "./Formulario"
//Process : Es una variable "global" de Node.js que nos permite acceder a informacion del proceso que estamos ejecutando

console.log(process.env)

const Carrito = () => {

    const { carrito, borrarDelCarrito, limpiarCarrito } = useContexto()

    return (
        <div>
            Soy Carrito
            {carrito.length > 0 ? (
                <ul>
                    {carrito.map((producto, indice) => {
                        return (
                            <li key={indice}>
                                {producto.nombre} - ${producto.precio}
                                <button onClick={() => borrarDelCarrito(producto.id, producto.cantidad)}>borrar</button>
                            </li>
                        )
                    })}
                </ul>
            ) : <p>No hay productos en el carrito</p>}
            {/* {carrito.length > 0 ? <Formulario/> : null} */}
            <button onClick={finalizarCompra}>finalizar compra</button>
        </div>
    )
}

export default Carrito