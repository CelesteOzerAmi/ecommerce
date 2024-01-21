import "./itemlistcontainer.css";
import ItemList from "../itemlist/ItemList.jsx";
import db from "../../db/db.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = ({ bienvenida }) => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const { categoria } = useParams()

    useEffect(() => {
        let consulta
        const productosRef = collection(db, "productos")

        if (categoria) {
            consulta = query(productosRef, where("categoria", "==", categoria))
        } else {
            consulta = productosRef
        }

        getDocs(consulta)
            .then((respuesta) => {
                let productosDb = respuesta.docs.map((producto) => {
                    return { id: producto.id, ...producto.data() }
                })
                setProductos(productosDb)
            })
            .catch((err) => console.log(err))
            .finally(() => setCargando(false))
    }, [categoria]);


    return (
        <> {
            cargando ? (
                <div className="cargando">
                    <PuffLoader/>
                </div>
            ) : (
                <section className="list-container">
                    <h1> {bienvenida} </h1>
                    <ItemList productos={productos} />
                </section>
            )
        }</>
    );
};

export default ItemListContainer;
