const Header = (props) => {

    console.log(props)
    console.log(props.nombre)


    return (
        <header id="main-header" className="header">
            <h1>Bienvenido {props.nombre}!</h1>
            <span className="material-icons">
                shopping_cart
            </span>
            <img src="/logo192.png" alt="logo" />
            <nav>
                {props.links.map((elemento, indice) => {
                    return <a key={elemento.id} href={elemento.href}>{elemento.name}</a>
                })}
            </nav>
        </header>
    )
}

export default Header