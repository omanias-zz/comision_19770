import { Link } from "react-router-dom"
import { useContexto } from "./miContexto"
import { addDoc, collection , serverTimestamp , updateDoc } from "firebase/firestore"
import { db } from "./firebase"

const Carrito = () => {

    const { carrito, borrarDelCarrito, limpiarCarrito } = useContexto()

    const finalizarCompra = () => {
        console.log("Guardando la compra en la db...")

        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection,{
            buyer : {
                name : "Juan",
                lastName : "Perez",
                email : "mail@mail"
            },
            items : carrito ,
            date : serverTimestamp(),
            total : 100
        })
        .then((resultado)=>{
            console.log(resultado)
            limpiarCarrito()
        })
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
                                <button onClick={() => borrarDelCarrito(producto.id, producto.cantidad)}>borrar</button>
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