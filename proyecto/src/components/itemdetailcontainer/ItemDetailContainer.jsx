import ItemDetail from "../itemdetail/ItemDetail"
import db from "../../db/db"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { PuffLoader } from "react-spinners"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const productoRef = doc(db, "productos", id)
        getDoc(productoRef)
            .then((respuesta) => {
                const productoDb = { id: respuesta.id, ...respuesta.data() }
                setProducto(productoDb)
            })
            .catch((err) => console.log(err))
            .finally(() => setCargando(false))
    }, [id])

    return (
        <> {
            cargando ? (
                <PuffLoader />
            ) : (
                <div className="container">
                    <ItemDetail producto={producto} />
                </div>
            )
        }</>
    )
}

export default ItemDetailContainer
