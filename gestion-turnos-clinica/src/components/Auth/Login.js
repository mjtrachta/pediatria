import React, { useState } from "react";
import "./Login.css";
import logo from "./DR TRACHTA CONSULTORIO PEDIATRICO.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Modal, Button } from "react-bootstrap";


const LoginForm = () => {
  // Estado para los campos del formulario
  const [documento, setDocumento] = useState({ tipo: "DNI", numero: "" });
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false); // Estado inicial como falso para el checkbox

  // Estado para la visibilidad de la contraseña y los modales
  const [showPassword, setShowPassword] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTurnModal, setShowTurnModal] = useState(false);

  // Funciones de manejo para mostrar y ocultar los modales
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const handlePrivacyModalClose = () => setShowPrivacyModal(false);
  const handlePrivacyModalShow = () => setShowPrivacyModal(true);
  const handleTurnModalClose = () => setShowTurnModal(false);
  const handleTurnModalShow = () => setShowTurnModal(true);

  // Función de manejo para el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar el envío del formulario
  };

  return (
    <>
      {/* Navbar con logo */}
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#0288d1" }}>
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </nav>

      {/* Formulario de inicio de sesión */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <form onSubmit={handleSubmit} className="bg-light p-4 shadow-sm">
              <h2 className="text-center mb-3" style={{ color: "#0288d1" }}>Iniciar Sesión</h2>

              {/* Selector de Tipo de Documento */}
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

              {/* Número de Documento */}
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
                <label htmlFor="documentoNumero" >Número de Documento</label>
              </div>

              {/* Campo de Contraseña */}
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

              {/* Casilla de Condiciones y Políticas de Privacidad */}
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

              {/* Botón de Ingresar */}
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

              {/* Texto de no tienes una cuenta */}
              <div className="text-center my-2">
                <span className="fw-bold" style={{ color: "#6a6f72" }}>
                  ¿NO TIENES UNA CUENTA?
                </span>
              </div>

              {/* Enlaces para obtener un turno o crear una cuenta */}
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

      {/* Modal para Políticas de Privacidad */}
      <Modal show={showPrivacyModal} onHide={handlePrivacyModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Políticas de Privacidad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Contenido de las Políticas de Privacidad */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePrivacyModalClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

       {/* Modal para Sacar Turno */}
       <Modal show={showTurnModal} onHide={handleTurnModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sacá un turno con tu documento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Selector de Tipo de Documento */}
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

          {/* Número de Documento */}
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
