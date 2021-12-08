import { useState } from 'react'
import Header from "./Header"
import ItemListContainer from "./ItemListContainer"
import "./app.scss"




function App() {
    
    /* const resultado = useState("")
    const estado = resultado[0]
    const setEstado = resultado[1] */

    let [contador, setContador] = useState(0)

    let [estado,setEstado] = useState(false)

    let [lista, setLista] = useState([])
    

    const links = [
        { href: "#", name: "inicio", id: 1 },
        { href: "#", name: "Productos", id: 2 },
        { href: "#", name: "Contactos", id: 3 },
        { href: "#", name: "Carrito", id: 4 }
    ]

    const foo = () => {
        console.log("soy foo")
    }

    const sumar = () => {
        //estado = true
        //contador = 1
        //contador++
        setContador(contador + 1)

        //setEstado(!estado)

        //operador rest/spread
        //slice()

        //const copia = lista

        setLista()
    }


    const restar = () => {
        setContador(contador - 1)
    }


    const resetear = () => {
        setContador(0)
    }
    
    return (
        <>
            <Header nombre={"E-Commerce"} edad={1} links={links} foo={foo}>
                <p>Hola</p>
                <p>Hola</p>
            </Header>
            <main>soy main</main>
            <p>Contador Actual : {contador}</p>
            <button onClick={sumar}>sumar</button>
            <button onClick={resetear}>resetear</button>
            <button onClick={restar}>restar</button>
            <ItemListContainer />
        </>
    )
}

export default App