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
        <div
            style={estiloCard}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className="card"
            key={producto.id}
        >
            <img src={producto.img} alt="" />
            <h1> {producto.nombre} </h1>
            <p>{producto.descripcion}</p>
            <strong>${producto.precio}</strong>
            <Link to={`/detalle/${producto.id}`}>ver más</Link>
        </div>
    )
}

export default Item