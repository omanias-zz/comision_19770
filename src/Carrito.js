import { Link } from "react-router-dom"
import { useContexto } from "./miContexto"

const Carrito = () => {

    const { carrito, borrarDelCarrito, limpiarCarrito } = useContexto()

    //const t = condicion ? b : a
    //const t = if(condicion){ } else { }

    return (
        <div>
            Soy Carrito
            {carrito.length > 0 ? (
                <ul>
                    {carrito.map((producto, indice) => {
                        return <li key={indice}>{producto.nombre} - ${producto.precio}</li>
                    })}
                </ul>
            ) : <p>No hay productos en el carrito</p>}

            <p className={carrito.length > 0 ? "rojo" : "negro"} >si tengo cosas en el carrito soy rojo, sino negro</p>
        </div>
    )

    /*  if (carrito.length > 0) {
         return (
             <div>
                 Soy Carrito
                 <ul>
                     {carrito.map((producto, indice) => {
                         return <li key={indice}>{producto.nombre} - ${producto.precio}</li>
                     })}
                 </ul>
             </div>
         )
 
     } else {
         return (
             <div>
                 No hay productos en el carrito
                 <Link to="/">ir a comprar</Link>
             </div>
         )
     }
 } */
}

export default Carrito