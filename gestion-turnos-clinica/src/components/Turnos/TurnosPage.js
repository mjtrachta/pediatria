import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import logo from './DR TRACHTA CONSULTORIO PEDIATRICO.png';

const TurnosPage = () => {
  const [stepOneData, setStepOneData] = useState({});
  const [availableAppointments, setAvailableAppointments] = useState([]);
  const [showStepTwo, setShowStepTwo] = useState(false);

  const handleStepOneSubmit = (event) => {
    event.preventDefault();
    // Aquí implementarías la lógica para manejar la búsqueda de turnos disponibles
    setShowStepTwo(true);
  };

  return (
    <>
      <Navbar style={{ backgroundColor: "#0288d1" }} expand="lg">
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
      </Navbar>

      <Container fluid>
        <Row>
          <Col xs={9} md={1} style={{ minHeight: '100vh', backgroundColor: 'lightgray' }}>
            {/* Sidebar */}
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Item className="text-center">
                <Nav.Link href="/home">
                  <i className="bi bi-calendar-check" style={{ fontSize: '2rem' }}></i>
                  <div>Nuevo Turno</div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="text-center">
                <Nav.Link eventKey="link-1">
                  <i className="bi bi-power" style={{ fontSize: '2rem' }}></i>
                  <div>Cerrar Sesión</div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          
          <Col xs={9} md={1}>
            <h1>Reserva de Turnos</h1>
            {!showStepTwo ? (
              // Formulario para el Paso 1
              <Form onSubmit={handleStepOneSubmit}>
                {/* Aquí irían tus controles de formulario como selects y inputs para el Paso 1 */}
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Apellido y nombre del paciente"
                    aria-label="Apellido y nombre del paciente"
                  />
                </InputGroup>
                {/* Agrega aquí más controles de formulario según sea necesario */}
                <Button variant="primary" type="submit">
                  Buscar Turnos
                </Button>
              </Form>
            ) : (
              // Formulario para el Paso 2
              <Form>
                {/* Aquí mostrarías los turnos disponibles y permitirías seleccionar uno */}
                {availableAppointments.map((appointment, index) => (
                  <div key={index}>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>{appointment.fecha}</InputGroup.Text>
                      <FormControl
                        placeholder={appointment.hora}
                        aria-label="Hora"
                        readOnly
                      />
                      <Button variant="outline-secondary">
                        Reservar Turno
                      </Button>
                    </InputGroup>
                  </div>
                ))}
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TurnosPage;
