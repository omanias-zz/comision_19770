import { useState, useEffect } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { db } from "./firebase"

console.log(db)

const ItemListContainer = ({ greeting }) => {

    let [lista, setLista] = useState([])
    const { nombre } = useParams()

    useEffect(() => {
        let promesa

        if(nombre){
            console.log("Productos por categoria")
            promesa = fetch(`https://fakestoreapi.com/products/category/${nombre}`)
        }else{
            console.log("Todos los productos")
            promesa = fetch('https://fakestoreapi.com/products')
        }

        promesa
            .then(res => res.json())
            .then((productos) => {
                setLista(productos)
            })

    }, [nombre])

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList lista={lista} />
        </div>
    )
}

export default ItemListContainer
