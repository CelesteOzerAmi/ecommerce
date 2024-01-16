import "./cart.css"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
    const { carrito, borrarProducto, vaciarCarrito } = useContext(CartContext)

    return (
        carrito.length > 0 ?
            (
                <section className="section">
                    {
                        carrito.map((producto) => (
                            <div key={producto.id} >
                                <img src={producto.img} alt="" />
                                <h1> {producto.nombre} </h1>
                                <p>{producto.descripcion}</p>
                                <strong>{producto.cantidad}</strong>
                                <button onClick={() => borrarProducto(producto.id)}> eliminar producto </button>
                            </div>
                        ))
                    }
                    <button onClick={vaciarCarrito}>vaciar carrito </button>
                    <Link to="/checkout"> finalizar compra </Link>
                </section>
            ) : (
                <div className="container">
                    <h2>tu carrito está vacio!</h2>
                    <Link to={"/"}>ir a la tienda</Link>
                </div>
            )
    )
}

export default Cart