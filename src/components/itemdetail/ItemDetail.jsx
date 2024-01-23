import "./itemdetail.css"
import { CartContext } from "../../context/CartContext"
import { useState, useContext } from "react"
import { Link } from "react-router-dom";
import ItemCount from "../itemcount/ItemCount"

const ItemDetail = ({ producto }) => {
    const [toggle, setToggle] = useState(false);
    const { añadirProducto } = useContext(CartContext)

    const agregarCarrito = (contador) => {
        const nuevoProducto = { ...producto, cantidad: contador }
        añadirProducto(nuevoProducto)
        setToggle(true)
    }

    return (
        <div
            className="card-detail"
            key={producto.id}
        >
            <h2> {producto.nombre} </h2>
            <img src={producto.img} alt="" />
            <h3>{producto.descripcion}</h3>
            <strong>${producto.precio}</strong>
            <div className="toggle">
                {toggle ? (
                    <>
                        <Link to="/"> seguir comprando </Link>
                        <Link to="/cart">ir al carrito</Link>
                    </>
                ) : (
                    <>
                        <ItemCount
                            stock={producto.stock}
                            agregarCarrito={agregarCarrito}
                            className="itemcount"
                        />
                        <h4>{producto.stock} unidades disponibles</h4>
                    </>
                )
                }
            </div>
        </div>
    )
}

export default ItemDetail