import React, { useState, useEffect } from 'react';
import './Employees.css'; // Importamos el archivo de CSS para estilos

const Employees = () => {
  const [employees, setEmployees] = useState([]);  // Estado para guardar los empleados
  const [loading, setLoading] = useState(true);    // Estado para saber si estamos cargando

  useEffect(() => {
    fetch('http://192.168.9.75:8080/api/employees')  
      .then(response => response.json())
      .then(data => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al hacer la petición:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className="employees-container">
      <h1 className="title">Empleados</h1>
      <ul className="employees-list">
        {employees.map((employee, index) => (
          <li key={index} className="employee-item">
            <h2 className="employee-name">{employee.name} {employee.surname}</h2>
            <p><strong>DNI:</strong> {employee.dni}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Fecha de Nacimiento:</strong> {employee.date}</p>
            <p><strong>Sueldo:</strong> {employee.salary}€</p>
            <p><strong>Puesto:</strong> {employee.position}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;
