const UsuariosList = ({usuarios,manejarBorrar}) => {

    const manejarClick = (id,e) => {
        //console.log(e.target)
        console.log(e)
        manejarBorrar(id)
    }

    return (
        <div>
            {usuarios.map((usuario,i)=>{
                return (
                    <article key={i}>
                        <h3>{usuario.nombre}</h3>
                        <button onClick={(e)=>manejarClick(usuario.id,e)}>borrar</button>
                    </article>
                )
            })}
        </div>
    )
}

export default UsuariosList
