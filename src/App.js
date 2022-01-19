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





//ASYNC / AWAIT


/* 
async function foo(){
    await ? 
}

const foo = async () => {
    const arr = []
    arr.map(async ()=>{
        await ?
    })
}


 */

/* event(()=>{
    
})
.then(()=>{
    event(()=>{
            
    })
})
.then(()=>{
    event(()=>{
            
    })
})
.catch(()=>{

})


 */


//SUGAR SYNTAX


/* const extra = (resultado) => {
    console.log(resultado)
}
 */


/* 
const pedirUsuarios = async () => {

    const resultado = await fetch("https://jsonplaceholder.typicode.com/users")
    const usuarios = await resultado.json()
    const usuario = usuarios[5]

    const posteos = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${usuario.id}`)
    const posteosUsuario = await posteos.json()

    if(posteosUsuario.length > 0){
        throw new Error("No hay posteos")
    }

    const comentarios = await Promise.all(posteosUsuario.map(async posteo => {
        const pedido = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posteo.id}`)
        const resultado = await pedido.json()
        return resultado
    }))

    return resultado
}
 */

/* 
const resultado = pedirUsuarios()
.catch((error)=>{
    console.error(error)
})

console.log(resultado)


 */






//GENERATOR FUNCTIONS
//Redux - Redux Saga
/* function * foo (a) {

    1
    2
    3
    4
    yield ?;
    5
    6
    7
   const t =  yield?

} */
/* 
foo.next()
foo.next(5)
 */









function App() {

    let [show, setShow] = useState(false)
    //alert - prompt - confirm - eval
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

