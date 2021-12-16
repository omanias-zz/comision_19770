import { useState, useEffect } from 'react'
import Header from "./Header"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from './ItemDetailContainer'
import "./app.scss"


function App() {
    
    let [show, setShow] = useState(false)

    const links = [
        { href: "#", name: "inicio", id: 1 },
        { href: "#", name: "Productos", id: 2 },
        { href: "#", name: "Contactos", id: 3 },
        { href: "#", name: "Carrito", id: 4 }
    ]

    return (
        <>
            <Header nombre={"E-Commerce"} links={links} />
            <ItemListContainer greeting={"Bienvenido!"} />
            <ItemDetailContainer/>
        </>
    )
}

export default App