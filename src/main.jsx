import React from 'react';
import ReactDOM  from 'react-dom/client';
import CounterApp from './CounterApp';
import { FirstApp } from './FirstApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp saludo="hola desde main" nombre={123} /> */}
        <CounterApp value={10} />
    </React.StrictMode>
);