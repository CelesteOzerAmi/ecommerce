import "../navbar/CartWidget.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {
    const {totalCantidad} = useContext(CartContext)

    return (
        <div className="cartwidget">
            <img src="/img/carrito.png" alt="" />
            <p>{totalCantidad()}</p>
        </div>
    )
}

export default CartWidget