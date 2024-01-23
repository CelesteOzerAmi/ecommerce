import { createContext, useState } from "react"
import Swal from "sweetalert2"

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const añadirProducto = (producto) => {
        const condicion = enCarrito(producto.id)
        if (condicion) {
            const productosModificados = carrito.map((productoCarrito) => {
                if (productoCarrito.id === producto.id) {
                    return { ...productoCarrito, cantidad: productoCarrito.cantidad + producto.cantidad }
                } else {
                    return productoCarrito
                }
            })
            setCarrito(productosModificados)
        } else {
            setCarrito([...carrito, producto])
        }
        {
            Swal.fire({
                title: 'añadido al carrito!',
                icon: 'success',
                confirmButtonText: 'ok',
                width: '20%',
                padding: '1%'
            })
        }
    }


    const enCarrito = (idProducto) => {
        return carrito.some((producto) => producto.id === idProducto)
    }

    const totalCantidad = () => {
        return carrito.reduce((total, producto) => total + producto.cantidad, 0)
    }

    const totalPrecio = () => {
        return carrito.reduce((total, producto) => total + producto.cantidad * producto.precio, 0)
    }

    const borrarProducto = (idProducto) => {
        const productosFiltrados = carrito.filter((producto) => producto.id !== idProducto)
        setCarrito(productosFiltrados)
        {
            Swal.fire({
                title: 'producto eliminado',
                icon: 'info',
                confirmButtonText: 'ok',
                width: '20%',
                padding: '1%'
            })
        }
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }


    return (
        <CartContext.Provider
            value={{
                carrito,
                añadirProducto,
                totalCantidad,
                totalPrecio,
                borrarProducto,
                vaciarCarrito
            }}
        >
            {children}
        </CartContext.Provider>
    )
}


export { CartProvider, CartContext }