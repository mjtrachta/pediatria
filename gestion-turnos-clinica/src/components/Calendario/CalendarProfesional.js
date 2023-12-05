import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Button, Modal, Form } from "react-bootstrap";
import logo from "../../components/assets/images/DR TRACHTA CONSULTORIO PEDIATRICO.png";
import "./CalendarProfesional.css";

const CalendarProfesional = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [horario, setHorario] = useState({
    horaInicio: "",
    horaFin: "",
    intervalo: "",
  });
  const [turnosDisponibles, setTurnosDisponibles] = useState([]);
  const [turnosSeleccionados, setTurnosSeleccionados] = useState(new Set());

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const handleHorarioChange = (e) => {
    setHorario({ ...horario, [e.target.name]: e.target.value });
  };

  const handleHorarioSubmit = (e) => {
    e.preventDefault();
    let horaInicio = parseInt(horario.horaInicio.split(":")[0]);
    let minutoInicio = parseInt(horario.horaInicio.split(":")[1]);
    let horaFin = parseInt(horario.horaFin.split(":")[0]);
    let intervalo = parseInt(horario.intervalo);
    let nuevosTurnos = [];

    for (let hora = horaInicio; hora < horaFin; hora++) {
      for (let minuto = minutoInicio; minuto < 60; minuto += intervalo) {
        let horaFormato = `${hora.toString().padStart(2, "0")}:${minuto
          .toString()
          .padStart(2, "0")}`;
        nuevosTurnos.push({ hora: horaFormato, disponible: true });
      }
      minutoInicio = 0; // Reiniciar los minutos para la siguiente hora
    }

    setTurnosDisponibles(nuevosTurnos);
    handleModalClose();
  };

  const seleccionarTurno = (index) => {
    let nuevosSeleccionados = new Set(turnosSeleccionados);
    if (nuevosSeleccionados.has(index)) {
      nuevosSeleccionados.delete(index);
    } else {
      nuevosSeleccionados.add(index);
    }
    setTurnosSeleccionados(nuevosSeleccionados);
  };

  const seleccionarTodosTurnos = () => {
    setTurnosSeleccionados(new Set(turnosDisponibles.map((_, index) => index)));
  };

  const deseleccionarTodosTurnos = () => {
    setTurnosSeleccionados(new Set());
  };

  const eliminarTurnosSeleccionados = () => {
    setTurnosDisponibles(
      turnosDisponibles.filter((_, index) => !turnosSeleccionados.has(index))
    );
    setTurnosSeleccionados(new Set());
  };

  const mostrarTurnos = () => (
    <ul className="lista-turnos">
      {turnosDisponibles.map((turno, index) => (
        <li
          key={index}
          className={`turno ${
            turnosSeleccionados.has(index) ? "seleccionado" : ""
          }`}
          onClick={() => seleccionarTurno(index)}
        >
          {turno.hora}
        </li>
      ))}
    </ul>
  );
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#0288d1" }}
      >
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </nav>

      <div className="container mt-5">
        <div className="calendar-wrapper">
          <Calendar onChange={handleDateChange} value={selectedDate} />
          <Button variant="primary" className="mt-3" onClick={handleModalShow}>
            Agregar Horario Disponible
          </Button>
        </div>

        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Agregar Horario para {selectedDate.toLocaleDateString()}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleHorarioSubmit}>
              <Form.Group>
                <Form.Label>Hora de Inicio</Form.Label>
                <Form.Control
                  type="time"
                  name="horaInicio"
                  value={horario.horaInicio}
                  onChange={handleHorarioChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Hora de Fin</Form.Label>
                <Form.Control
                  type="time"
                  name="horaFin"
                  value={horario.horaFin}
                  onChange={handleHorarioChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Intervalo entre turnos (minutos)</Form.Label>
                <Form.Control
                  type="number"
                  name="intervalo"
                  placeholder="Ingrese intervalo en minutos"
                  value={horario.intervalo}
                  onChange={handleHorarioChange}
                  required
                />
              </Form.Group>
              <div className="boton-centrado">
                <Button variant="primary" type="submit">
                  Guardar Horario
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>

        {/* Sección para mostrar y gestionar los turnos */}
        <div className="turnos-disponibles-wrapper">
          <h4>Turnos para {selectedDate.toLocaleDateString()}</h4>
          <div className="lista-turnos-container">{mostrarTurnos()}</div>
          {/* Botones para seleccionar/deseleccionar y eliminar turnos */}
          <div className="turnos-actions">
            <Button variant="secondary" onClick={seleccionarTodosTurnos}>
              Seleccionar Todos
            </Button>
            <Button variant="secondary" onClick={deseleccionarTodosTurnos}>
              Deseleccionar Todos
            </Button>
            <Button variant="danger" onClick={eliminarTurnosSeleccionados}>
              Eliminar Seleccionados
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarProfesional;
