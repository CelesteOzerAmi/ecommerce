import "../navbar/CartWidget.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <div className="cartwidget">
            <img src="../img/carrito.png" alt="" />
            <Link to={"/cart"}>{totalCantidad()}</Link>
        </div>
    )
}

export default CartWidget