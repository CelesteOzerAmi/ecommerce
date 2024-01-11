import { useState } from "react"


const Form = () => {
    const [nombre, setNombre] = useState("")
    const [direccion, setDireccion] = useState("")
    const [email, setEmail] = useState("")

    const cambiarNombre = (e) => {
        setNombre(e.target.value)
    }

    const cambiarDireccion = (e) => {
        setDireccion(e.target.value)
    }

    const cambiarEmail = (e) => {
        setEmail(e.target.value)
    }

    const enviarFormulario = (e) => {
        e.preventDefault()
        const user = {nombre, direccion, email}
    }

    return(
        <form onSubmit={enviarFormulario}>
            <label>
                Nombre: <input type="text" value={nombre} onChange={cambiarNombre} />
            </label>
            <label>
                Direccion: <input type="text" value={direccion} onChange={cambiarDireccion} />
            </label>
            <label>
                Email: <input type="email" value={email} onChange={cambiarEmail} />
            </label>
            <button type="submit">enviar</button>
        </form>
    )
}


export default Form