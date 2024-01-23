import "./form.css"
const Form = ({ datosForm, guardarDatosInput, enviarOrden }) => {

    return (
        <section className="form-section">
            <h1>completá los campos para finalizar la compra</h1>
            <form onSubmit={enviarOrden} className="form">
                <label htmlFor="nombre">nombre</label>
                <input type="text" id="nombre" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput} required />

                <label htmlFor="telefono">telefono</label>
                <input type="text" id="telefono" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput} />

                <label htmlFor="email">email</label>
                <input type="email" id="email" name="email" value={datosForm.email} onChange={guardarDatosInput} />

                <label htmlFor="emailconfirmar">confirmar email</label>
                <input type="email" id="emailconfirmar" name="emailconfirmar" value={datosForm.emailconfirmar} onChange={guardarDatosInput} />

                <button type="submit"> enviar orden </button>
            </form>
        </section>
    )
}


export default Form