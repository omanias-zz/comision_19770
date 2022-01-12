import { createContext, useContext, useState } from "react";

const contexto = createContext()

export const { Provider } = contexto

export const useContexto = () => {
    return useContext(contexto)
}


const CustomProvider = ({ children }) => {

    const [precio_total, setPrecioTotal] = useState(0)
    const [cantidad_total, setCantidadTotal] = useState(0)
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (cantidad, producto) => {
        const id = producto.id
        if (isInCarrito(id)) {
            const copia_del_carrito = [...carrito]
            let match = copia_del_carrito.find((p) => p.id === producto.id)
            match.cantidad = match.cantidad + cantidad
            setCarrito(copia_del_carrito)
        } else {
            const producto_con_cantidad = {
                ...producto,
                cantidad
            }
            setCarrito([...carrito, producto_con_cantidad])
        }
        setCantidadTotal(cantidad_total + cantidad)
    }

    const borrarDelCarrito = (id,cantidad) => {
        let carritoFiltrado = carrito.filter(e => (e.id) !== id)
        setCarrito(carritoFiltrado)
        setCantidadTotal(cantidad_total - cantidad)
    }

    const limpiarCarrito = () => {
        setCarrito([])
        setCantidadTotal(0)
    }

    const isInCarrito = (id) => {
        return carrito.some((p) => p.id === id)
    }

    const valorDelContexto = {
        cantidad_total,
        carrito,
        precio_total,
        agregarAlCarrito,
        borrarDelCarrito,
        limpiarCarrito
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider