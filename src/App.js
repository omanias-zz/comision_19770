import { useState, useEffect, createContext } from 'react'
import Header from "./Header"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from './ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./app.scss"
import Footer from './Footer'
import Home from "./Home"
import Carrito from "./Carrito"
import CustomProvider, { Provider } from './miContexto'


function App() {

    let [show, setShow] = useState(false)
    
    const links = [
        { href: "/productos", name: "productos", id: 1 },
        { href: "/categoria/electronics", name: "electronics", id: 2 },
        { href: "/categoria/jewelery", name: "jewelery", id: 3 }
    ]

    return (
            <CustomProvider>
                <BrowserRouter>
                    <Header nombre={"E-Commerce"} links={links} />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/productos" element={<ItemListContainer greeting={"Bienvenido!"} />} />
                            <Route path="/categoria/:nombre" element={<ItemListContainer greeting={"Bienvenido!"} />} />
                            <Route path="/carrito" element={<Carrito />} />
                            <Route path="/producto/:id" element={<ItemDetailContainer />} />
                        </Routes>
                    </main>
                    <Footer />
                </BrowserRouter>
            </CustomProvider>
    )
}

export default App



/* 
CLOSURES

function Provider() {

    const estado = 0

    const aumentar = () => {
        estado++
        console.log(estado)    
    }

    return { aumentar : aumentar }
}


const resultado = Provider() 




POROGRAMACION FUNCIONAL

*/