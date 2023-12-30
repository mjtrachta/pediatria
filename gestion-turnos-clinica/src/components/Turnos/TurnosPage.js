import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import logo from "../../components/assets/images/DR TRACHTA CONSULTORIO PEDIATRICO.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import { format } from "date-fns";

const formatoFecha = (fecha) => format(new Date(fecha), "yyyy-MM-dd");

const TurnosPage = () => {
  const [stepOneData, setStepOneData] = useState({
    listaNombresApellidos: [],
    especialidad: "",
    ubicacion: "",
    medico: "",
    tipoTurno: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [especialidades, setEspecialidades] = useState(["Pediatria", "otra"]);
  const [ubicaciones, setUbicaciones] = useState(["Clinica de la Merced"]);
  const [tiposDeTurno, setTiposDeTurno] = useState(["CONSULTA"]);

  const [medicosPorEspecialidad, setMedicosPorEspecialidad] = useState([]);

  const [showStepTwo, setShowStepTwo] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [turnosDisponibles, setTurnosDisponibles] = useState([]);
  const [originalTurnos, setOriginalTurnos] = useState([]);

  const handleStepOneSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);

    if (Object.values(stepOneData).every((value) => value)) {
      try {
        const { medico, ubicacion } = stepOneData;
        const [nombreProfesional, apellidoProfesional] = medico.split(" ");

        const token = obtenerTokenJWT();
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get(
          `http://localhost:8081/turnos/consultar2/${nombreProfesional}/${apellidoProfesional}/${ubicacion}`,
          { headers: headers }
        );

        console.log("Respuesta de la API para turnos:", response.data);

        const datesWithTurnos = response.data.map(
          (turno) => new Date(turno.fechaInicio)
        );

        setOriginalTurnos(response.data || []);

        setTurnosDisponibles(response.data || []);
      } catch (error) {
        console.error("Error al obtener turnos:", error);
      }
      setShowStepTwo(true);
    }
  };

  const handleChange = async (e, field) => {
    const value = e.target.value;
    setStepOneData((prevState) => ({
      ...prevState,
      [field]: value,
    }));

    if (field === "especialidad") {
      try {
        const token = obtenerTokenJWT();
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get(
          `http://localhost:8081/profesionales/especialidad/${value}`,
          { headers: headers }
        );

        console.log("Respuesta de la API:", response.data);

        setMedicosPorEspecialidad(response.data || []);
      } catch (error) {
        console.error("Error al obtener médicos por especialidad:", error);
      }
    }
  };

  const obtenerTokenJWT = () => {
    return localStorage.getItem("token");
  };

  const obtenerDatosPaciente = async () => {
    try {
      const token = obtenerTokenJWT();
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(
        "http://localhost:8081/pacientes/buscar",
        { headers: headers }
      );
      if (response.data) {
        const nombreCompleto =
          response.data.nombre + " " + response.data.apellido;
        setStepOneData((prevState) => ({
          ...prevState,
          listaNombresApellidos: [nombreCompleto],
        }));
      }
    } catch (error) {
      console.error("Error al obtener datos del paciente:", error);
    }
  };

  const obtenerObraSocial = async () => {
    try {
      const token = obtenerTokenJWT();
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(
        "http://localhost:8081/pacientes/obra-social",
        { headers: headers }
      );

      if (response.data) {
        const obraSocial = response.data.nombreObraSocial;
        setStepOneData((prevState) => ({
          ...prevState,
          obraSocial: obraSocial,
        }));
      }
    } catch (error) {
      console.error("Error al obtener la obra social:", error);
    }
  };

  useEffect(() => {
    obtenerDatosPaciente();
    obtenerObraSocial();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = format(selectedDate, "yyyy-MM-dd");
  
      // Filtrar los turnos por la fecha seleccionada
      const turnosFiltrados = originalTurnos.filter(
        (turno) => format(new Date(turno.fechaInicio), "yyyy-MM-dd") === formattedDate
      );
  
      console.log("Turnos filtrados para la fecha seleccionada:", turnosFiltrados);
  
      setTurnosDisponibles(turnosFiltrados);
    } else {
      // Si no hay fecha seleccionada, mostrar todos los turnos disponibles
      // Puedes ajustar esto según tu lógica exacta
      setTurnosDisponibles(originalTurnos);
    }
  }, [selectedDate, originalTurnos]);
  

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

          <Col md={3} className="mt-4">
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
                        stepOneData.listaNombresApellidos.length === 0
                          ? "is-invalid"
                          : ""
                      }`}
                      onChange={(e) => handleChange(e, "nombreApellido")}
                      value={stepOneData.nombreApellido}
                    >
                      <option value="" disabled>
                        Seleccione Nombre y Apellido
                      </option>
                      {stepOneData.listaNombresApellidos.map(
                        (nombre, index) => (
                          <option key={index} value={nombre}>
                            {nombre}
                          </option>
                        )
                      )}
                    </Form.Control>
                    {stepOneData.listaNombresApellidos.length === 0 && (
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
                      value={stepOneData.obraSocial || ""}
                    >
                      <option value="" disabled>
                        Seleccione una obra social
                      </option>
                      {stepOneData.obraSocial && (
                        <option key="1" value={stepOneData.obraSocial}>
                          {stepOneData.obraSocial}
                        </option>
                      )}
                    </Form.Control>
                    {submitted && !stepOneData.obraSocial && (
                      <div className="invalid-feedback">
                        Por favor, seleccione una obra social.
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
                      <option value="" disabled>
                        Seleccione una especialidad
                      </option>
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
                      {medicosPorEspecialidad.map((medico, index) => (
                        <option
                          key={index}
                          value={`${medico.nombre} ${medico.apellido}`}
                        >
                          {`${medico.nombre} ${medico.apellido}`}
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
            <>
              <Col md={3} className="mt-4">
                <Card>
                  <Card.Body>
                    <h5>Paso 2 - Elige el turno</h5>
                    <Calendar
                      className="mb-3"
                      onChange={(date) => setSelectedDate(date)}
                    />
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4} className="mt-4">
                <Card>
                  <Card.Header>Turnos Disponibles</Card.Header>
                  <Card.Body>
                    <div className="table-container">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Fecha</th>
                            <th>Acción</th>
                          </tr>
                        </thead>
                        <tbody>
                          {turnosDisponibles.map((turno, index) => (
                            <tr key={index}>
                              <td>{turno.fechaInicio}</td>
                              <td className="text-end">
                                <Button variant="primary" size="sm">
                                  Reservar Turno
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default TurnosPage;
