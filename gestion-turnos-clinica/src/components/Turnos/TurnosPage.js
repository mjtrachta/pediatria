import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  ListGroup,
} from "react-bootstrap";
import logo from "./DR TRACHTA CONSULTORIO PEDIATRICO.png";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarStyles.css';

const TurnosPage = () => {
  const [stepOneData, setStepOneData] = useState({
    nombreApellido: "",
    obraSocial: "",
    especialidad: "",
    ubicacion: "",
    medico: "",
    tipoTurno: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const nombreApellido = ["Juan Carlos"];
  const obrasSociales = ["OSDE", "Swiss Medical", "Medicus"];
  const especialidades = ["Clínica Médica", "Pediatría", "Cardiología"];
  const ubicaciones = ["Sede Central", "Sede Norte"];
  const medicosDisponibles = ["Dr. House", "Dr. Strange", "Dra. Cuddy"];
  const tiposDeTurno = ["Consulta", "Control", "Urgencia"];

  const [showStepTwo, setShowStepTwo] = useState(false);

  const handleStepOneSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true); // Marca el formulario como enviado

    if (Object.values(stepOneData).every((value) => value)) {
      setShowStepTwo(true);
    }
  };


  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableTimes, setAvailableTimes] = useState([]);

  // Define handleDateChange aquí
  const handleDateChange = (date) => {
    setSelectedDate(date); // actualiza la fecha seleccionada
    loadAvailableTimes(date); // carga los horarios disponibles para la nueva fecha
  };


   // Simula la carga de horarios disponibles para el día seleccionado
   const loadAvailableTimes = (date) => {
    // Suponiendo que esta función obtiene los horarios del servidor
    // Establece los horarios disponibles en el estado
    const timesForSelectedDate = [
      { time: '10:30', id: 1 },
      { time: '10:50', id: 2 },
      // ...otros horarios...
    ];
    setAvailableTimes(timesForSelectedDate);
  };

   // Manejador para el cambio de fecha en el calendario
   const handleChange = (e, field) => {
    setStepOneData(prevState => ({
      ...prevState,
      [field]: e.target.value
    }));
  };

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
      </Navbar>

      <Container fluid>
        <Row>
          <Col
            xs={9}
            md={1}
            style={{ minHeight: "100vh", backgroundColor: "lightgray" }}
          >
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Item className="text-center">
                <Nav.Link href="/home">
                  <i
                    className="bi bi-calendar-check"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <div>Nuevo Turno</div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="text-center">
                <Nav.Link eventKey="link-1">
                  <i className="bi bi-power" style={{ fontSize: "2rem" }}></i>
                  <div>Cerrar Sesión</div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col xs={9} md={4} className="mt-4">
            <Card>
              <Card.Body>
                <br></br>
                <h5 style={{ color: "#00BFFF", textAlign: "left" }}>Paso 1</h5>
                <p style={{ textAlign: "left" }}>
                  Completa los datos para buscar turnos
                </p>
                <br></br>
                <Form onSubmit={handleStepOneSubmit}>
                  {/* Nombre y Apellido */}
                  <Form.Group className="mb-4">
                    <Form.Control
                      as="select"
                      className={`form-select ${
                        submitted && !stepOneData.nombreApellido
                          ? "is-invalid"
                          : ""
                      }`}
                      onChange={(e) => handleChange(e, "nombreApellido")}
                      value={stepOneData.nombreApellido}
                    >
                      <option value="">Nombre y Apellido</option>
                      {nombreApellido.map((nombre, index) => (
                        <option key={index} value={nombre}>
                          {nombre}
                        </option>
                      ))}
                    </Form.Control>
                    {submitted && !stepOneData.nombreApellido && (
                      <div className="invalid-feedback">
                        Por favor, selecciona un nombre y apellido.
                      </div>
                    )}
                  </Form.Group>

                  {/* Obra Social */}
                  <Form.Group className="mb-4">
                    <Form.Control
                      as="select"
                      className={`form-select ${
                        submitted && !stepOneData.obraSocial ? "is-invalid" : ""
                      }`}
                      onChange={(e) => handleChange(e, "obraSocial")}
                      value={stepOneData.obraSocial}
                    >
                      <option value="">Obra Social</option>
                      {obrasSociales.map((obraSocial, index) => (
                        <option key={index} value={obraSocial}>
                          {obraSocial}
                        </option>
                      ))}
                    </Form.Control>
                    {submitted && !stepOneData.obraSocial && (
                      <div className="invalid-feedback">
                        Por favor, selecciona una obra social.
                      </div>
                    )}
                  </Form.Group>

                  {/* Especialidad */}
                  <Form.Group className="mb-4">
                    <Form.Control
                      as="select"
                      className={`form-select ${
                        submitted && !stepOneData.especialidad
                          ? "is-invalid"
                          : ""
                      }`}
                      onChange={(e) => handleChange(e, "especialidad")}
                      value={stepOneData.especialidad}
                    >
                      <option value="">Especialidad</option>
                      {especialidades.map((especialidad, index) => (
                        <option key={index} value={especialidad}>
                          {especialidad}
                        </option>
                      ))}
                    </Form.Control>
                    {submitted && !stepOneData.especialidad && (
                      <div className="invalid-feedback">
                        Por favor, selecciona una especialidad.
                      </div>
                    )}
                  </Form.Group>

                  {/* Ubicación */}
                  <Form.Group className="mb-4">
                    <Form.Control
                      as="select"
                      className={`form-select ${
                        submitted && !stepOneData.ubicacion ? "is-invalid" : ""
                      }`}
                      onChange={(e) => handleChange(e, "ubicacion")}
                      value={stepOneData.ubicacion}
                    >
                      <option value="">Ubicación</option>
                      {ubicaciones.map((ubicacion, index) => (
                        <option key={index} value={ubicacion}>
                          {ubicacion}
                        </option>
                      ))}
                    </Form.Control>
                    {submitted && !stepOneData.ubicacion && (
                      <div className="invalid-feedback">
                        Por favor, selecciona una ubicación.
                      </div>
                    )}
                  </Form.Group>

                  {/* Médico */}
                  <Form.Group className="mb-4">
                    <Form.Control
                      as="select"
                      className={`form-select ${
                        submitted && !stepOneData.medico ? "is-invalid" : ""
                      }`}
                      onChange={(e) => handleChange(e, "medico")}
                      value={stepOneData.medico}
                    >
                      <option value="">Médico</option>
                      {medicosDisponibles.map((medico, index) => (
                        <option key={index} value={medico}>
                          {medico}
                        </option>
                      ))}
                    </Form.Control>
                    {submitted && !stepOneData.medico && (
                      <div className="invalid-feedback">
                        Por favor, selecciona un médico.
                      </div>
                    )}
                  </Form.Group>

                  {/* Tipo de Turno */}
                  <Form.Group className="mb-4">
                    <Form.Control
                      as="select"
                      className={`form-select ${
                        submitted && !stepOneData.tipoTurno ? "is-invalid" : ""
                      }`}
                      onChange={(e) => handleChange(e, "tipoTurno")}
                      value={stepOneData.tipoTurno}
                    >
                      <option value="">Tipo de Turno</option>
                      {tiposDeTurno.map((tipo, index) => (
                        <option key={index} value={tipo}>
                          {tipo}
                        </option>
                      ))}
                    </Form.Control>
                    {submitted && !stepOneData.tipoTurno && (
                      <div className="invalid-feedback">
                        Por favor, selecciona un tipo de turno.
                      </div>
                    )}
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Buscar Turnos
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {showStepTwo && (
            <Col xs={9} md={7} className="mt-4">
              <Card>
              <Card.Header>Horarios disponibles</Card.Header>
              <Card.Body>
            <h5>Paso 2 - Elige el turno</h5>
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              // Aquí puedes añadir más props para personalizar tu calendario
            />
            {/* Aquí va el resto de tu contenido para el Paso 2 */}
          </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default TurnosPage;
