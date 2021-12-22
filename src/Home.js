import {useState} from "react"
import UsuariosList from "./UsuariosList"

//Event (e) : El objeto evento
//Event.target : El elemento que disparó el evento
//Event.preventDefault() : Evita que el evento ejecute su comportamiento por defecto
//Event.stopPropagation() : Evita que el evento se propague a los elementos que están sobre de él

const Home = () => {

    const [valor,setValor] = useState("")
    const [usuarios,setUsuarios] = useState([])
    const [mostrar,setMostrar] = useState(true)

    const manejarBorrar = (id) => {
        //setUsuarios()
        console.log(id)
        //setUsuarios(usuarios.filter(usuario => usuario.id !== id))
    }

    const hacerClick = (e) => {
        //e.preventDefault()
        //console.dir(e.target.disabled)
        //console.log("Click del boton")
        //e.stopPropagation()
        //const target = e.target
        //console.log(target)

        /* setTimeout(()=>{
            console.log(e.target)
        },2000) */
        //usuarios.push(valor)

        //const copia = usuarios.slice(0)
        //copia.push(valor)

        //const copia = [...usuarios,valor]
        //setUsuarios(copia)
        //console.log(valor)

        setUsuarios([...usuarios,{id:Math.random(),nombre:valor}])
    }

    const hacerChange = (e) => {
        //console.log({target : e.target})
        //console.dir(e.target)
        const valor = e.target.value
        setValor(valor)
    }

    const hacerClickSinDefault = (e) => {
        e.preventDefault()
        console.log("Hago otra cosa que no sea redirigir")
    } 

    const prevenirEscritura = (e) => {
        console.log(e.key)
        //e.preventDefault()
    }

    const prevenirSubmit = (e) => {
        e.preventDefault()
        console.log("No se puede enviar el formulario")
    }

    return (
        <div>
            Soy Home  
            <a href="http://google.com" onClick={hacerClickSinDefault}>ir a google</a>
            <input type="text" onChange={hacerChange} />
            <button id="boton" onClick={hacerClick}>click</button>
            <UsuariosList usuarios={usuarios} manejarBorrar={manejarBorrar}/>
            {/* <form onSubmit={prevenirSubmit}> */}
            {/* </form> */}
        </div>
    )
}

export default Home
