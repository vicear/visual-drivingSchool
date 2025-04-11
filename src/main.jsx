// src/main.jsx
import React from 'react';  // Importamos React
import ReactDOM from 'react-dom/client';  // Importamos ReactDOM para montar la app
import App from './App';  // Importamos el componente App
import './index.css';  // Si tienes un archivo de estilos, impórtalo aquí

const rootElement = document.getElementById('root');  // Obtenemos el div con id 'root'

// Montamos la aplicación React en el contenedor 'root'
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />  {/* Aquí montamos el componente App */}
  </React.StrictMode>
);
