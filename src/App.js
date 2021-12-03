import Header from "./Header"

function App () {

    //const links = ["link1","link2"]
    const links=[ 
        {href:"#", name:"inicio",id:1}, 
        {href:"#", name:"Productos",id:2}, 
        {href:"#", name:"Contactos",id:3}, 
        {href:"#", name:"Carrito",id:4} 
    ]

    return (
        <>
            <Header nombre={"Horacio"} edad={1} links={links}/>
            <main>soy main</main>
        </>
    )
}

export default App