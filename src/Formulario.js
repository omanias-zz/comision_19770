const Formulario = () => {

    const finalizarCompra = () => {
        console.log("Guardando la compra en la db...")

        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection,{
            buyer : {
                name : "Juan",
                lastName : "Perez",
                email : "mail@mail"
            },
            items : carrito ,
            date : serverTimestamp(),
            total : 100
        })
        .then((resultado)=>{
            console.log(resultado)
            limpiarCarrito()
        })
    }

    return (
        <div>
            <input type="text" placeholder="nombre" />
            <input type="text" placeholder="email" />
            <input type="text" placeholder="telefono" />
            <button onClick={()=>{finalizarCompra()}}>finalizar compra</button>
        </div>
    )
}

export default Formulario
