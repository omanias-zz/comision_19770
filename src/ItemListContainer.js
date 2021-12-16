import { useState , useEffect } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const productosIniciales = [
    { nombre: "Camisa", precio: 50 },
    { nombre: "Pantalon", precio: 100 },
    { nombre: "Zapatos", precio: 150 }
]


const ItemListContainer = ({greeting}) => {

    /* const [cantidad, setCantidad] = useState(0) */
    let [lista, setLista] = useState([])

    useEffect(()=>{

        const promesa = new Promise((res,rej)=>{
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
        })

    },[])


    /* */

    return (
        <div>
           <h2>{greeting}</h2>
           {/* <p>Items seleccionados : {cantidad}</p> */}
           {/*  */}
           <ItemList lista={lista}/>
        </div>
    )
}

export default ItemListContainer
