import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const productoInicial = {
    nombre: "Camisa",
    precio: 50
}


const ItemDetailContainer = () => {

    const { id } = useParams()

    let [producto, setProducto] = useState(null)

    useEffect(()=>{
        if(id){
            console.log("Aca pediria solo el detalle del producto con id: " + id)
        }   else{
            console.log("Aca pediria todos los productos")
        }
        /* const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },2000)
        })
        
        promesa
        .then((productos)=>{
            console.log("Todo bien")
            setLista(productos)
        })
        .catch(()=>{
            console.log("Todo mal")
        }) */
    },[])


    return (
        <div>
            {/* <ItemDetail/> */}
            <ItemDetail producto={productoInicial} />
        </div>
    )
}

export default ItemDetailContainer
