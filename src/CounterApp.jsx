import PropTypes from 'prop-types';
import { useState } from 'react';

const CounterApp = ({value}) => {

    const [contador, setContador] = useState(value);

    const increment = () => {
        setContador(contador + 1)
    }

    const decrement = () => {
        setContador(contador - 1)
    }

    const reset = () => {
        setContador(value)
    } 

    return (
        <div className="contenido">
            <h1>CounterApp</h1>
            <h2>{contador}</h2>

            <div className='botones'>
                <button onClick={increment}>
                    +1
                </button>
                <button onClick={decrement}>
                    -1
                </button>
                <button onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    )
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}

export default CounterApp