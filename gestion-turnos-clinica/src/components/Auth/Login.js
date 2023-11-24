import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import logo from "./DR TRACHTA CONSULTORIO PEDIATRICO.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Modal, Button } from "react-bootstrap";

const LoginForm = () => {
  const navigate = useNavigate();
  const [documento, setDocumento] = useState({ tipo: "DNI", numero: "" });
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTurnModal, setShowTurnModal] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const handlePrivacyModalClose = () => setShowPrivacyModal(false);
  const handlePrivacyModalShow = () => setShowPrivacyModal(true);
  const handleTurnModalClose = () => setShowTurnModal(false);
  const handleTurnModalShow = () => setShowTurnModal(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría la lógica de validación y autenticación del formulario

    // Redirigir al usuario a la página de turnos después del inicio de sesión
    navigate('/turnos');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#0288d1" }}>
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </nav>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <form onSubmit={handleSubmit} className="bg-light p-4 shadow-sm">
              <h2 className="text-center mb-3" style={{ color: "#0288d1" }}>Iniciar Sesión</h2>

              <div className="form-floating mb-3">
                <select
                  id="tipoDocumento"
                  value={documento.tipo}
                  onChange={(e) => setDocumento({ ...documento, tipo: e.target.value })}
                  className="form-select"
                >
                  <option value="DNI">D.N.I.</option>
                  <option value="LC">L.C.</option>
                  <option value="LE">L.E.</option>
                  <option value="PASAPORTE">PASAPORTE</option>
                </select>
                <label htmlFor="tipoDocumento">Tipo de Documento</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="documentoNumero"
                  placeholder="Número de Documento"
                  value={documento.numero}
                  onChange={(e) => setDocumento({ ...documento, numero: e.target.value })}
                  required
                />
                <label htmlFor="documentoNumero">Número de Documento</label>
              </div>

              <div className="form-floating mb-3 position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="floatingPassword">Contraseña</label>
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="btn btn-link position-absolute top-0 end-0 mt-3 me-3"
                  style={{ zIndex: 2, textDecoration: "none" }}
                >
                  {showPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye-fill"></i>}
                </button>
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="agreeTerms"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="agreeTerms">
                  Estoy de acuerdo con las condiciones y{" "}
                  <Button variant="link" onClick={handlePrivacyModalShow} style={{ color: "#0288d1" }}>
                    Políticas de Privacidad
                  </Button>
                </label>
              </div>

              <div className="d-grid gap-2 mb-3">
                <button
                  className="btn"
                  type="submit"
                  disabled={!agree}
                  style={{ backgroundColor: "#0288d1", color: "white" }}
                >
                  Ingresar
                </button>
                <a
                  href="/forgot-password"
                  className="text-decoration-none d-block text-center mt-2 mb-4"
                  style={{ color: "#6a6f72" }}
                >
                  ¿Olvidó su contraseña?
                </a>
              </div>

              <div className="text-center my-2">
                <span className="fw-bold" style={{ color: "#6a6f72" }}>
                  ¿NO TIENES UNA CUENTA?
                </span>
              </div>

              <div className="text-center">
                <Button variant="link" onClick={handleTurnModalShow} className="fw-bold text-decoration-none" style={{ color: "#0288d1" }}>
                  Sacá un turno solo con tu documento
                </Button>
                <a
                  href="/crear-cuenta"
                  className="text-decoration-none d-block"
                  style={{ color: "#0288d1" }}
                >
                  Creá una cuenta para usar el portal
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Modal show={showPrivacyModal} onHide={handlePrivacyModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Políticas de Privacidad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Aquí va el contenido de las Políticas de Privacidad */}
          <ol>
            <li>
              El Consultorio Pediatrico Dr. Trachta se compromete activamente
              con el resguardo de la intimidad de sus pacientes y usuarios. Se
              hace saber que se han tomado y se trabaja continuamente en la toma
              de las medidas necesarias para que los pacientes y usuarios del
              sitio web se encuentren protegidos en el resguardo de la
              información obrante en el sitio y la protección de sus datos
              personales.
            </li>
            <li>
              Esta política de privacidad se aplica exclusivamente a la
              información ofrecida y recibida por los pacientes y usuarios del
              sitio https://miportal.trachta.com/ y no a la de otras compañías u
              organizaciones con los que el sitio contenga enlaces y sobre los
              que El Consultorio Pediatrico Dr. Trachta no tiene control.
            </li>
            <li>
              La información registrada en este sitio y la recopilada será
              siempre ajustada a nuestra política privacidad.
            </li>
            <li>
              Al acceder al portal de pacientes https://miportal.trachta.com/se
              le requerirá información personal (DNI, Direccion de Correo
              Electronico, Contraseña), la que es necesaria para poder brindar
              los servicios ofrecidos en el sitio web. Se deja constancia de que
              dicha información solo será recabada y almacenada, luego de que
              sea aceptada por el usuario y/o paciente. Mediante esa aceptación,
              nos autoriza a su uso para los fines indicados precedentemente. El
              Consultorio Pediatrico Dr. Trachta garantiza la confidencialidad
              de dicha información, no permitiendo que terceros ajenos a la
              Institución accedan a la misma.
            </li>
            <li>
              El Consultorio Pediatrico Dr. Trachta podrá recabar información
              personal del paciente y/o usuario para identificarlo, brindarle
              servicios, realizar encuestas, determinar datos demográficos de
              los pacientes, socios y usuarios y procesar información
              estadística y general.
            </li>
            <li>
              El Consultorio Pediatrico Dr. Trachta no divulgará ni compartirá
              información personal del paciente y/o usuario sin el
              consentimiento expreso del mismo.
            </li>
            <li>
              Sin perjuicio de las declaraciones anteriores, El Consultorio
              Pediatrico Dr. Trachta podrá revelar información personal solo en
              los casos en que exista obligación legal de hacerlo.
            </li>
            <li>
              El Consultorio Pediatrico Dr. Trachta reconoce al paciente y/o
              usuario -en tanto titular de los datos personales- el derecho a
              solicitar y a obtener información sobre sus datos personales
              incluidos en sus registros y a obtener la rectificación,
              actualización y la supresión de los datos personales de los que
              sea titular, todo ello de conformidad con lo establecido en la Ley
              25.326 de protección de Datos Personales.
            </li>
            <li>
              Al utilizar este sitio web está manifestando conocer nuestra
              política de privacidad, la que se considera aceptada.
            </li>
          </ol>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePrivacyModalClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showTurnModal} onHide={handleTurnModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sacá un turno con tu documento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-floating mb-3">
            <select
              id="tipoDocumentoModal"
              value={documento.tipo}
              onChange={(e) => setDocumento({ ...documento, tipo: e.target.value })}
              className="form-select"
            >
              <option value="DNI">D.N.I.</option>
              <option value="LC">L.C.</option>
              <option value="LE">L.E.</option>
              <option value="PASAPORTE">PASAPORTE</option>
            </select>
            <label htmlFor="tipoDocumentoModal">Tipo de Documento</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="documentoNumeroModal"
              placeholder="Número de Documento"
              value={documento.numero}
              onChange={(e) => setDocumento({ ...documento, numero: e.target.value })}
              required
            />
            <label htmlFor="documentoNumeroModal">Número de Documento</label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleTurnModalClose}>
            Cancelar
          </Button>
          <Button variant="primary">
            Ingresar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginForm;
