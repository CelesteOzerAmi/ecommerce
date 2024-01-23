import "./item.css"
import { useState } from "react"
import { Link } from "react-router-dom"


const Item = ({ producto }) => {
    const [zoom, setZoom] = useState(false)

    const handleMouseOver = () => {
        setZoom(true)
    }

    const handleMouseLeave = () => {
        setZoom(false)
    }

    const estiloCard = {
        transform: zoom ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s ease-in-out'
    }

    return (
        <Link to={`/detalle/${producto.id}`}
                style={estiloCard}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                className="card"
                key={producto.id}
            >
                <h2> {producto.nombre} </h2>
                <img src={producto.img} alt="" />
                <strong>${producto.precio}</strong>
        </Link>
    )
}

export default Item