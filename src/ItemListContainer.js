import { useState, useEffect } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { getDocs, query, collection , where } from "firebase/firestore"


const ItemListContainer = ({ greeting }) => {

    let [lista, setLista] = useState([])
    const { nombre } = useParams()

    //const pedirProductos = () => {}

    useEffect(() => {

        const productosCollection = collection(db, "productos")

        //pedirProductos()

        if (nombre) {

            const consulta = query(productosCollection,where("categoria","==",nombre),where("precio",">",100))
            /* await */ getDocs(consulta)
                .then(({ docs }) => {
                    setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                })
                .catch((error) => {
                    console.log(error)
                })

        } else {

            getDocs(productosCollection)
                .then(({ docs }) => {
                    setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                })
                .catch((error) => {
                    console.log(error)
                })
        }



        /* let promesa

        if (nombre) {
            console.log("Productos por categoria")
            promesa = fetch(`https://fakestoreapi.com/products/category/${nombre}`)
        } else {
            console.log("Todos los productos")
            promesa = fetch('https://fakestoreapi.com/products')
        }

        promesa
            .then(res => res.json())
            .then((productos) => {
                setLista(productos)
            }) */

    }, [nombre])

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList lista={lista} />
        </div>
    )
}

export default ItemListContainer
