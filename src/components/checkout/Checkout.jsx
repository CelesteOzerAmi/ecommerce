import "./checkout.css"
import Form from "../form/Form"
import db from "../../db/db"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection } from "firebase/firestore"
import Swal from "sweetalert2"



const Checkout = ({ bienvenida }) => {
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
            Swal.fire({
                title: 'error',
                text: 'repetir email',
                icon: 'warning',
                confirmButtonText: 'ok',
                width: '25%',
            })
        }
    }



    const subirOrden = (orden) => {
        const ordenesRef = collection(db, "ordenes")
        addDoc(ordenesRef, orden)
            .then((res) => {
                {
                    Swal.fire({
                        title: 'listo!',
                        text: 'tu orden fue registrada con éxito',
                        icon: 'success',
                        confirmButtonText: 'ok',
                        width: '25%',
                        padding: '1%'
                    })
                }
                setIdOrden(res.id)
                vaciarCarrito()
            })
    }

    return (
        <>
            {idOrden ? (
                <section className="checkout-confirmado">
                    <h1>{bienvenida}</h1>
                    <h2>tu orden fue generada con éxito!</h2>
                    <p>el id de la orden es: <strong>{idOrden}</strong> </p>
                    <p>te enviamos las indicaciones de entrega al correo que nos proporcionaste.</p>
                    <h3>gracias por preferirnos!</h3>
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