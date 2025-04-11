// src/App.js
import React from 'react';
import Employees from './components/Employees';  // Importamos el componente Employees

const App = () => {
  return (
    <div className="App">
      <Employees />  {/* Aquí usamos el componente Employees */}
    </div>
  );
};

export default App;
