import { Link, NavLink } from "react-router-dom"
import { useContexto } from "./miContexto"

const Header = ({ nombre, links }) => {

    const { cantidad_total } = useContexto()

    return (
        <header id="main-header" className="header">
            <div id="brand">
                <NavLink to="/">
                    <img src="/logo192.png" alt="logo" />
                    <h1>{nombre}</h1>
                </NavLink>
            </div>
            <nav>
                {links.map((elemento, indice) => {
                    return <NavLink key={elemento.id} to={elemento.href}>{elemento.name}</NavLink>
                })}
                <NavLink to="/carrito">
                    <span className="material-icons">
                        shopping_cart
                    </span>
                    {cantidad_total}
                </NavLink>
            </nav>
        </header>
    )
}

export default Header