import "./cart.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = ({titulo}) => {
    const { carrito, borrarProducto, vaciarCarrito } = useContext(CartContext)

    return (
        carrito.length > 0 ?
            (
                <section className="section">
                    <h1 className="titulo">{titulo}</h1>
                    <div className="cartoptions">
                        <button onClick={vaciarCarrito} className="vaciar">vaciar carrito </button>
                        <Link to="/checkout" className="finalizar" >finalizar compra </Link>
                    </div>
                    <div className="product-section">
                    {
                        carrito.map((producto) => (
                            <div key={producto.id} className="cartelement">
                                <img src={producto.img} alt="" />
                                <h1> {producto.nombre} </h1>
                                <p>{producto.descripcion}</p>
                                <strong>{producto.cantidad}</strong>
                                <button onClick={() => borrarProducto(producto.id)}> eliminar producto </button>
                            </div>
                        ))
                    }
                    </div>
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