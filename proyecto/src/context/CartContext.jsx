import { createContext, useState } from "react"

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
    }

    
    const enCarrito = (idProducto) => {
        carrito.some((producto) => producto.id === idProducto)
    }
    
    const totalCantidad = () => {
        return carrito.reduce((total, producto) => total + producto.cantidad, 0)
    }

    const borrarProducto = (idProducto) => {
        const productosFiltrados = carrito.filter((producto) => producto.id !== idProducto)
        setCarrito(productosFiltrados)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }


    return (
        <CartContext.Provider value={{ carrito, añadirProducto, totalCantidad, borrarProducto, vaciarCarrito  }}>
            {children}
        </CartContext.Provider>
    )
}


export { CartProvider, CartContext }