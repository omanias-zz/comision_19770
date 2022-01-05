import { useContexto } from "./miContexto"

const Carrito = () => {

    const { carrito, borrarDelCarrito , limpiarCarrito } = useContexto()

    return (
        <div>
            Soy Carrito
        </div>
    )
}

export default Carrito
