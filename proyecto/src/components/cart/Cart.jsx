import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
    const { carrito, borrarProducto, vaciarCarrito } = useContext(CartContext)

    return (
        carrito.length > 0 ?
            (
                <div>
                    {
                        carrito.map((producto) => (
                            <div key={producto.id}>
                                <img src={producto.img} alt="" />
                                <p>{producto.nombre}</p>
                                <p>{producto.descripcion}</p>
                                <p>{producto.cantidad}</p>
                                <button onClick={() => borrarProducto(producto.id)}> eliminar producto </button>
                            </div>
                        ))
                    }
                    <button onClick={vaciarCarrito}>vaciar carrito </button>
                </div>
            ) : (
                <h1>
                    carrito vacio
                </h1>
            )
    )
}

export default Cart