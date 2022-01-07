import { createContext, useContext, useState } from "react";

const contexto = createContext()

export const { Provider } = contexto

export const useContexto = () => {
    return useContext(contexto)
}



const CustomProvider = ({children}) => {

    const [precio_total, setPrecioTotal] = useState(0)
    const [cantidad_total,setCantidadTotal] = useState(0)
    const [carrito,setCarrito] = useState([])

    const agregarAlCarrito = (cantidad,producto) => {
        console.log("Soy el provider")
        //console.log(cantidad,producto)

        const copia_producto = {...producto}
        copia_producto.cantidad = cantidad

        /*const copia = producto.slice(0)
        copia.push(producto)
        setCarrito(copia) */

        //setCarrito(producto.slice(0).push(producto))

        /* const copia = [...carrito]
        copia.push(producto)
        setCarrito(copia) */

        /* const copia = [...carrito,producto]
        setCarrito(copia) */

        setCarrito([...carrito,copia_producto])
        setCantidadTotal(cantidad_total + cantidad)
        
        //producto.cantidad = cantidad
        /* if(isInCarrito()){
            
        }else{

        } */
    }

    const borrarDelCarrito = (id) => {
        //const nuevo_carrito = ?
        //setCarrito(estadoArray.filter())
        //setCarrito(estadoArray.map())
    }

    const limpiarCarrito = () => {  setCarrito([])  }

    const isInCarrito = (id) => {
        //return true ? false
    }

    const valorDelContexto = {
        cantidad_total , 
        carrito , 
        agregarAlCarrito , 
        borrarDelCarrito ,
        limpiarCarrito
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider