import "./checkout.css"
import Form from "../form/Form"
import db from "../../db/db"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection } from "firebase/firestore"



const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
        emailconfirmar: "",
    })

    const [idOrden, setIdOrden] = useState(null)

    const { carrito, totalPrecio, vaciarCarrito } = useContext(CartContext)

    const guardarDatosInput = (e) => {
        setDatosForm({ ...datosForm, [e.target.name]: e.target.value })
    }

    const enviarOrden = (e) => {
        e.preventDefault()
        if (datosForm.email === datosForm.emailconfirmar) {
            const orden = {
                fecha: new Date(),
                comprador: { ...datosForm },
                productos: [...carrito],
                total: totalPrecio()
            }
            subirOrden(orden)
        } else {
            alert("error email")
        }
    }



    const subirOrden = (orden) => {
        const ordenesRef = collection(db, "ordenes")
        addDoc(ordenesRef, orden)
            .then((res) => {
                setIdOrden(res.id)
                vaciarCarrito()
            })
    }

    return (
        <>
            {idOrden ? (
                <section className="checkout-confirmado">
                    <h2>tu orden fue generada con éxito!</h2>
                    <h3>el ID de la orden es: <strong>{idOrden}</strong> </h3>
                    <p>te enviamos las indicaciones de entrega al correo que nos proporcionaste.</p>
                    <h4>gracias por preferirnos!</h4>
                </section>
            ) : (
                <Form
                    datosForm={datosForm}
                    guardarDatosInput={guardarDatosInput}
                    enviarOrden={enviarOrden}
                />
            )}
        </>
    )
}


export default Checkout