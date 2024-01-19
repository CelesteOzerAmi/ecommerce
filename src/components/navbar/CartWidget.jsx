import "../navbar/CartWidget.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <section className="cartwidget">
            <Link to={"/cart"}>
                <img src="../img/carrito.png" alt="" />
                {totalCantidad()}
            </Link>
        </section>
    )
}

export default CartWidget