import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Asegúrate de que axios esté importado
import "./Login.css";
import logo from "../../components/assets/images/DR TRACHTA CONSULTORIO PEDIATRICO.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Modal, Button } from "react-bootstrap";

const LoginForm = () => {
  const navigate = useNavigate();
  const [documento, setDocumento] = useState({ tipo: "D.N.I.", numero: "" });
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTurnModal, setShowTurnModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const handlePrivacyModalClose = () => setShowPrivacyModal(false);
  const handlePrivacyModalShow = () => setShowPrivacyModal(true);
  const handleTurnModalClose = () => setShowTurnModal(false);
  const handleTurnModalShow = () => setShowTurnModal(true);
  console.log("Enviando al backend:", {
    tipoDocumento: documento.tipo,
    nroDocumento: documento.numero,
    password: password
});

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Imprimir en consola los datos que se enviarán
    console.log("Enviando al backend:", {
      tipoDocumento: documento.tipo,
      nroDocumento: documento.numero,
      password: password
  });
    try {
      const response = await axios.post('http://localhost:8081/login', {
        tipoDocumento: documento.tipo,
        nroDocumento: documento.numero,
        password: password
        
      });
      localStorage.setItem('token', response.data.token);
      navigate('/turnos');
       // Imprimir la respuesta en la consola
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Error al conectarse al servidor");
      }
    }
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

              {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              )}

              <div className="d-grid gap-2 mb-3">
                <button
                  className="btn"
                  type="submit"
                  disabled={!agree}
                  style={{ backgroundColor: "#0288d1", color: "white" }}
                >
                  Ingresar
                </button>
                <Button
                  variant="link"
                  href="/forgot-password"
                  className="text-decoration-none d-block text-center mt-2 mb-4"
                  style={{ color: "#6a6f72" }}
                >
                  ¿Olvidó su contraseña?
                </Button>
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
            {/* Contenido de las políticas de privacidad */}
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
