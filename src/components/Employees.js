"use client"

import { useState, useEffect } from "react"
import "./Employees.css"

const Employees = () => {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://192.168.9.75:8080/api/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error al hacer la petición:", error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="loading">Cargando...</div>
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">
          <span className="logo-text">DrivingSchool</span>
        </div>
      </header>

      <div className="employees-container">
        <h1 className="title">Empleados</h1>
        <div className="employees-list">
          {employees.map((employee, index) => (
            <div key={index} className="employee-card">
              <div className="employee-header">
                <h2 className="employee-name">
                  {employee.name} {employee.surname}
                </h2>
                <span className="employee-position">{employee.position}</span>
              </div>
              <div className="employee-details">
                <div className="detail-row">
                  <span className="detail-label">DNI:</span>
                  <span className="detail-value">{employee.dni}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">{employee.email}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Fecha de Nacimiento:</span>
                  <span className="detail-value">{employee.date}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Sueldo:</span>
                  <span className="detail-value">{employee.salary}€</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Employees
