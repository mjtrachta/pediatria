// Form.js
import React from "react";
import logo from "../../components/assets/images/DR TRACHTA CONSULTORIO PEDIATRICO.png";
// Asegúrate de que este archivo contiene los estilos necesarios

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementar lógica para manejar el envío del formulario
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


      <h2 className="text-left" style={{ color: "rgb(2, 136, 209)", padding: 15 }}>
                Crear Paciente
              </h2>

      <div className="col-md-5 container mt-6">
      <div className="row justify-content-center">
        <form
          className="bg-light p-4 shadow-sm needs-validation"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                aria-label="Nombre"
                required
                id="nombre"
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                aria-label="Apellido"
                required
                id="apellido"
              />
            </div>
            <div className="col-md-6">
              <input
                type="tel"
                className="form-control"
                placeholder="Teléfono Móvil"
                aria-label="Teléfono Móvil"
                required
                id="telefonoMovil"
              />
            </div>
            <div className="col-md-6">
              <input
                type="tel"
                className="form-control"
                placeholder="Teléfono Fijo"
                aria-label="Teléfono Fijo"
                id="telefonoFijo"
              />
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                id="email"
                
              />
            </div>
            
            
            <div className="col-md-6">
              <select className="form-select" id="tipoDocumento" required>
                <option selected disabled value="">
                  Tipo de Documento
                </option>
                <option>DNI</option>
                <option>LC</option>
                <option>LE</option>
                <option>PASAPORTE</option>
              </select>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Número de Documento"
                aria-label="Número de Documento"
                required
                id="numeroDocumento"
              />
            </div>

            <div className="col-md-2"></div>
            <div className="col-md-4">
              <input
                type="date"
                className="form-control"
                id="fechaNacimiento"
                required
              />
            </div>
            <div className="col-md-4">
              <select className="form-select" id="sexo" required>
                <option selected disabled value="">
                  Sexo
                </option>
                <option>Masculino</option>
                <option>Femenino</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="col-md-2"></div>
            
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="País"
                aria-label="País"
                id="pais"
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Provincia"
                aria-label="Provincia"
                id="provincia"
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Ciudad"
                aria-label="Ciudad"
                id="ciudad"
              />
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                placeholder="Domicilio"
                aria-label="Domicilio"
                id="domicilio"
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Código Postal"
                aria-label="Código Postal"
                id="codigoPostal"
              />
            </div>
           
           <div className="col-md-4"></div>
            <div className="col-md-4">
              <button className="btn btn-primary w-100" type="submit">
                Enviar Formulario
              </button>
            </div>
          </div>
          
        </form>
        </div>
      </div>
    </>
  );
};

export default Form;
