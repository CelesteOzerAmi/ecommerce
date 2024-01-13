
const Form = ({ datosForm, guardarDatosInput, enviarOrden }) => {

    return (
        <form onSubmit={enviarOrden}>
            <label htmlFor="nombre">nombre</label>
            <input type="text" id="nombre" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput} />

            <label htmlFor="telefono">telefono</label>
            <input type="text" id="telefono" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput} />

            <label htmlFor="email">email</label>
            <input type="email" id="email" name="email" value={datosForm.email} onChange={guardarDatosInput} />

            <button type="submit"> comprar </button>
        </form>
    )
}


export default Form