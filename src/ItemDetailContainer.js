import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const { id } = useParams()

    let [producto, setProducto] = useState(null)

    useEffect(()=>{

        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(res=>{
            setProducto(res)
        })
           
    },[id])


    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer
