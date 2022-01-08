import { memo } from "react"
import Item from "./Item"

const Lista = ({usuarios,borrarUsuario}) => {

    console.log("Render Lista")

    return (
        <ul>
            {usuarios.map(usuario => (
                <Item key={usuario.id} usuario={usuario} borrarUsuario={borrarUsuario}/>
            ))}
        </ul>
    )
}

export default memo(Lista)
