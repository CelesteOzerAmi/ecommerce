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
            className="card"
            key={producto.id}
        >
            <img src={producto.img} alt="" />
            <h1> {producto.nombre} </h1>
            <p>{producto.descripcion}</p>
            <strong>${producto.precio}</strong>
            <p>{producto.stock} unidades disponibles</p>
            {toggle ? (
                <>
                    <Link to="/"> seguir comprando </Link>
                    <Link to="/cart">ir al carrito</Link>
                </>
            ) : (
                <ItemCount
                    stock={producto.stock}
                    agregarCarrito={agregarCarrito}
                />
            )
            }
        </div>
    )
}

export default ItemDetail