import { memo } from "react"

const Item = ({ usuario , borrarUsuario }) => {

    console.log("Render Item : " + usuario.nombre)

    const borrar = () => {
        borrarUsuario(usuario.id)
    }

    return (
        <li>
            {usuario.nombre}
            <button onClick={borrar}>borrar</button>
        </li>
    )
}

export default memo(Item)
