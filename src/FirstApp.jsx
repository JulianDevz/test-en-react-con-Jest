import PropTypes from 'prop-types';

export function FirstApp( {saludo, nombre} ) {

    return (
        <>
            <h1>{saludo}</h1>
            <h1>{nombre}</h1>
            <p>Componente FirstApp</p>
        </>
    )
}

FirstApp.defaultProps = {
    saludo: "Saludo vacio",
    nombre: 987
}

FirstApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    nombre: PropTypes.number.isRequired
}