// CreateAccountPage.js
import React, { useState } from "react";
import logo from "./DR TRACHTA CONSULTORIO PEDIATRICO.png";
import "./CreateAccountPage.css"; // Asegúrate de que este archivo contiene los estilos necesarios

const CreateAccountPage = () => {
  const [documento, setDocumento] = useState({ tipo: "DNI", numero: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí implementarías la lógica para crear la cuenta
  };

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
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-6">
            <div
              className="form-container text-right"
              style={{ color: "#6a6f72" }}
            >
              <h2 className="text-left" style={{ color: "rgb(2, 136, 209)" }}>
                Nueva Cuenta
              </h2>
              <br></br>
              <p className="text-left">
                <strong>
                  ¿Cómo crear una cuenta en el Portal de Pacientes?
                </strong>
                <a href="URL_DEL_VIDEO" style={{ color: "rgb(2, 136, 209)" }}>
                  {" "}
                  Mirá el video
                </a>
              </p>
              <p>
                Para poder crear una cuenta, debés ser <strong>paciente</strong>
                paciente del <strong>CONSULTORIO PERIÁTRICO DR. TRACHTA</strong>
                , así como tener registrada una{" "}
                <strong>casilla de correo electrónico</strong> asociada a tu{" "}
                <strong>documento</strong>. En caso de no cumplir con estos
                requisitos, debe pedir en su proxima consulta ser agregado al
                sistema.
              </p>

              <p className="text-left">
                <strong>¿Qué hacer si se bloquea tu cuenta?</strong>
              </p>

              <ul>
                <li className="text-left">
                  <strong>Opción 1:</strong> aguardá 3hs hasta que se desbloquee
                  e ingresá nuevamente con tu clave registrada.
                </li>

                <li className="text-left">
                  <strong>Opción 2:</strong> restablecé tu clave ingresando al
                  e-mail de aviso que recibiste en tu correo.
                </li>
              </ul>
              <form onSubmit={handleSubmit} className="bg-light p-4 shadow">
                <div className="form-floating mb-3">
                  <select
                    id="tipoDocumento"
                    value={documento.tipo}
                    onChange={(e) =>
                      setDocumento({ ...documento, tipo: e.target.value })
                    }
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
                    
                    onChange={(e) =>
                      setDocumento({ ...documento, numero: e.target.value })
                    }
                    required
                  />
                  <label htmlFor="documentoNumero">Número de Documento</label>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <a
                    href="/" // Asegúrate de que esta ruta lleve de vuelta al LoginForm
                    className="text-decoration-none"
                    style={{ color: "#6a6f72" }}
                  >
                    VOLVER AL LOGIN
                  </a>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    style={{
                      backgroundColor: "#0288d1",
                      color: "white",
                      padding: "0.375rem 0.75rem",
                    }} // Puedes ajustar el padding para cambiar el tamaño
                  >
                    Ingresar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccountPage;
