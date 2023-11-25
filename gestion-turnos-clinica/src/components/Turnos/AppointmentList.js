// AppointmentList.js
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import logo from "../../components/assets/images/DR TRACHTA CONSULTORIO PEDIATRICO.png";
import "./AppointmentList.css"; // Asegúrate de que este archivo contenga tus estilos personalizados

const AppointmentList = () => {
  const [date, setDate] = useState(new Date());
  const [appointments, setAppointments] = useState([
    { hora: "10:00", nombrePaciente: "Juan Pérez", edad: 30, estado: "atendido" },
{ hora: "10:30", nombrePaciente: "Eduardo David Trachta", edad: 26, estado: "por-atender" },
{ hora: "11:00", nombrePaciente: "Maria Remedios", edad: 25, estado: "cancelado" },
{ hora: "11:30", nombrePaciente: "Rodrigo Vera", edad: 5, estado: "ausente" },
{ hora: "12:00", nombrePaciente: "Luisa Fernández", edad: 42, estado: "atendido" },
{ hora: "12:30", nombrePaciente: "Alberto Ramos", edad: 37, estado: "por-atender" },
{ hora: "13:00", nombrePaciente: "Sara Molina", edad: 29, estado: "cancelado" },
{ hora: "13:30", nombrePaciente: "Miguel Ángel Torres", edad: 33, estado: "ausente" },
{ hora: "14:00", nombrePaciente: "Carmen Ruiz", edad: 28, estado: "atendido" },
{ hora: "14:30", nombrePaciente: "Francisco Javier López", edad: 31, estado: "por-atender" },
{ hora: "15:00", nombrePaciente: "Andrea Sánchez", edad: 22, estado: "cancelado" },
{ hora: "15:30", nombrePaciente: "Jorge Martín", edad: 47, estado: "ausente" },
{ hora: "16:00", nombrePaciente: "Elena García", edad: 35, estado: "atendido" },
{ hora: "16:30", nombrePaciente: "Carlos Pérez", edad: 40, estado: "por-atender" },
{ hora: "17:00", nombrePaciente: "Patricia Gómez", edad: 27, estado: "cancelado" },
{ hora: "17:30", nombrePaciente: "Luis Rodríguez", edad: 45, estado: "ausente" },
{ hora: "18:00", nombrePaciente: "María José Jiménez", edad: 34, estado: "atendido" },
{ hora: "18:30", nombrePaciente: "Fernando Alonso", edad: 39, estado: "por-atender" },
{ hora: "19:00", nombrePaciente: "Claudia Fernández", edad: 30, estado: "cancelado" },
{ hora: "19:30", nombrePaciente: "Diego Martínez", edad: 26, estado: "ausente" },
{ hora: "20:00", nombrePaciente: "Sofía Rodríguez", edad: 21, estado: "atendido" },
{ hora: "20:30", nombrePaciente: "Gabriel Soto", edad: 38, estado: "por-atender" },
{ hora: "21:00", nombrePaciente: "Lucía Pérez", edad: 32, estado: "cancelado" },
{ hora: "21:30", nombrePaciente: "Raúl Gutiérrez", edad: 36, estado: "ausente" },
{ hora: "22:00", nombrePaciente: "Marta Morales", edad: 24, estado: "atendido" },
{ hora: "22:30", nombrePaciente: "Adrián González", edad: 29, estado: "cancelado" },
{ hora: "23:00", nombrePaciente: "Valeria Núñez", edad: 40, estado: "cancelado" },
{ hora: "23:30", nombrePaciente: "Iván Castillo", edad: 23, estado: "ausente" },
{ hora: "08:00", nombrePaciente: "Natalia Vázquez", edad: 41, estado: "atendido" },
{ hora: "08:30", nombrePaciente: "Javier Moreno", edad: 35, estado: "por-atender" },
{ hora: "09:00", nombrePaciente: "Laura Díaz", edad: 22, estado: "cancelado" },
    // ... otros turnos
  ]);

  const onChange = (newDate) => {
    setDate(newDate);
    // Aquí podrías hacer la lógica para cargar los turnos agendados para la fecha seleccionada
    // Por ahora, solo estamos simulando los datos
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#0288d1" }}>
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </nav>

      <div className="container mt-5">
        <div className="calendar-wrapper d-flex flex-column align-items-center p-3 rounded bg-light">
          <h2 style={{ color: "rgb(2, 136, 209)" }}>Turnos Agendados</h2>
          <div className="calendar-container my-4">
            <Calendar onChange={onChange} value={date} />
          </div>
          <div className="appointments-list mt-4 w-100 overflow-auto" style={{ maxHeight: '400px' }}>
            <h4>Turnos para {date.toLocaleDateString()}</h4>
            {appointments.length > 0 ? (
              <ul className="list-group">
                {appointments.map((appointment, index) => (
                  <li key={index} className={`list-group-item ${appointment.estado}`}>
                    {appointment.hora} - {appointment.nombrePaciente} ({appointment.edad} años)
                  </li>
                ))}
              </ul>
            ) : (
              <p>No hay turnos para esta fecha.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentList;
