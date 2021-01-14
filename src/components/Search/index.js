function Search(props) {
    function handleChange(e) {// esta funcion toma el valor a travez de un evento e invoca funcion de Padre!
        const { value } = e.target;// agarro el valor
        props.handleCallback(value);//  ejecuta la funcion, pasada por porp, y devuelve 'value' a padre.
    }

    return (
        <>
            <input className={props.classProp} placeholder='tipea el nombre del curso' type="text" onChange={handleChange} />
        </>
    )
}

export default Search;