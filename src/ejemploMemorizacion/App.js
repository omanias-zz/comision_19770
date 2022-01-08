import { useCallback, useMemo, useState } from "react";
import Lista from "./Lista";


/**
 * 
 * Los componentes renderizan cuando : 
 * 
 *  1 - Cambia el estado
 *  2 - Cambian los props
 *  3 - Su padre se renderiza
 *  4 - Cambia el contexto
 *  5 - Cambia el valor de un hook
 * 
 * 
 * 
 * memo : Memoriza componentes para que no cambien solo con props y estado
 * useMemo : Memoriza variables locales que se recrean si y solo si no son funciones
 * useCallback : Memoriza variables locales que se recrean si y solo si son funciones
 * 
 * 
 * useMemo(()=>{},[]) : Memoriza el retorno de la funcion
 * 
 * useCallback(()=>{},[]) : Memoriza la funcion
 */

const App = () => {

    const [nombre, setNombre] = useState("");
    const [usuarios, setUsuarios] = useState([]);
    const [valor,setValor] = useState("");

    const guardarNombre = e => {
        setNombre(e.target.value);
    }

    const agregarUsuario = () => {
        const usuario = { nombre : nombre , id : Math.random() }
        setUsuarios([...usuarios, usuario]);
    }

    const borrarUsuario = (id) => {
        //console.log(id)
        //console.log(usuarios)
        const filtrados = usuarios.filter(usuario => usuario.id !== id)
        //console.log(filtrados)
        setUsuarios(filtrados)
    }

    const borrarUsuarioMemorizada = useCallback(borrarUsuario,[usuarios])
    //console.log(borrarUsuario)


    const buscarUsuario = () => {
        setValor(nombre)
        //setUsuariosFiltrados()
    }

    const usuariosFiltrados = usuarios.filter(usuario => usuario.nombre.includes(valor))

    const usuariosFiltradosMemorizados = useMemo(()=>{ return usuariosFiltrados },[usuarios,valor])

    return (
        <div>
            <input type="text" placeholder="nombre" onChange={guardarNombre}/>
            <button onClick={agregarUsuario}>agregar usuario</button>
            <button onClick={buscarUsuario}>buscar</button>
            <Lista usuarios={usuariosFiltradosMemorizados} borrarUsuario={borrarUsuarioMemorizada}/>
        </div>
    )
}

export default App;