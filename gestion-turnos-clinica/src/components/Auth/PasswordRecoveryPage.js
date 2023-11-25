// CreateAccountPage.js
import React, { useState } from "react";
import logo from "../../components/assets/images/DR TRACHTA CONSULTORIO PEDIATRICO.png";


const PasswordRecoveryPage = () => {
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
                Recupero de Contraseña
              </h2>
              <br></br>
              <p>
                Para poder generar o recuperar su clave, debe estar registrado
                como usuario de Portal de Pacientes, así como tener registrada
                una casilla de Correo electrónico.
              </p>

              <p className="text-left">
                <strong>
                  Mientras que recupera su cuenta puede sacar un turno con su
                  DOCUMENTO
                </strong>
              </p>

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

export default PasswordRecoveryPage;
