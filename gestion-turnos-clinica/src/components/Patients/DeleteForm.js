// DeleteForm.js
import React, { useState } from "react";
import logo from "../../components/assets/images/DR TRACHTA CONSULTORIO PEDIATRICO.png";

const DeleteForm = () => {
  // Estado para la búsqueda del paciente
  const [searchTerms, setSearchTerms] = useState({
    tipoDocumento: "",
    numeroDocumento: "",
  });

  // Estado para los datos del paciente
  const [patientData, setPatientData] = useState(null);

  // Manejador para los cambios en los campos de búsqueda
  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchTerms({ ...searchTerms, [name]: value });
  };

  // Manejador para el envío del formulario de búsqueda
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Aquí deberías hacer la llamada a la API para obtener los datos del paciente
    console.log("Buscar paciente con:", searchTerms);

    // Simulamos la respuesta de la API asignando un objeto paciente
    setPatientData({
      nombre: "Juan",
      apellido: "Pérez",
      email: "juan.perez@example.com",
      telefonoMovil: "1234567890",
      telefonoFijo: "0987654321",
      fechaNacimiento: "1990-01-01",
      sexo: "Masculino",
      pais: "Argentina",
      provincia: "Buenos Aires",
      ciudad: "Capital Federal",
      domicilio: "Calle Falsa 123",
      codigoPostal: "1000",
    });
  };

  // Manejador para la eliminación del paciente
  const handleDelete = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar al paciente?")) {
      // Aquí deberías hacer la llamada a la API para eliminar al paciente
      console.log("Eliminar paciente:", patientData);
      setPatientData(null); // Limpiar los datos del paciente después de la eliminación
    }
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
      <div className="container mt-5">
        <h2 className="text-center" style={{ color: "rgb(2, 136, 209)" }}>
          Buscar y Eliminar Paciente
        </h2>

        {/* Formulario de búsqueda */}
        <div className="col-md-5 container mt-6">
          <div className="row justify-content-center">
            <form
              className="bg-light p-4 shadow-sm needs-validation"
              noValidate
              onSubmit={handleSearchSubmit}
            >
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="tipoDocumento">Tipo de Documento</label>
                  <select
                    className="form-select"
                    id="tipoDocumento"
                    name="tipoDocumento"
                    value={searchTerms.tipoDocumento}
                    onChange={handleSearchChange}
                    required
                  >
                    <option value="">Seleccione</option>
                    <option value="DNI">DNI</option>
                    <option value="PASAPORTE">Pasaporte</option>
                    {/* Agregar más opciones de tipos de documento según sea necesario */}
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="numeroDocumento">Número de Documento</label>
                  <input
                    type="text"
                    className="form-control"
                    id="numeroDocumento"
                    name="numeroDocumento"
                    value={searchTerms.numeroDocumento}
                    onChange={handleSearchChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">
                    Buscar Paciente
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Muestra los datos del paciente y la opción de eliminar */}
        {patientData && (
          <div className="col-md-5 container mt-6">
            <div className="row justify-content-center">
              <form
                className="bg-light p-4 shadow-sm needs-validation"
                noValidate
                onSubmit={handleSearchSubmit}
              >
                <h3>Información del Paciente</h3>
                <p>
                  <strong>Nombre:</strong> {patientData.nombre}
                </p>
                <p>
                  <strong>Apellido:</strong> {patientData.apellido}
                </p>
                <p>
                  <strong>Email:</strong> {patientData.email}
                </p>
                <p>
                  <strong>Teléfono Móvil:</strong> {patientData.telefonoMovil}
                </p>
                <p>
                  <strong>Teléfono Fijo:</strong> {patientData.telefonoFijo}
                </p>
                <p>
                  <strong>Fecha de Nacimiento:</strong>{" "}
                  {patientData.fechaNacimiento}
                </p>
                <p>
                  <strong>Sexo:</strong> {patientData.sexo}
                </p>
                <p>
                  <strong>País:</strong> {patientData.pais}
                </p>
                <p>
                  <strong>Provincia:</strong> {patientData.provincia}
                </p>
                <p>
                  <strong>Ciudad:</strong> {patientData.ciudad}
                </p>
                <p>
                  <strong>Domicilio:</strong> {patientData.domicilio}
                </p>
                <p>
                  <strong>Código Postal:</strong> {patientData.codigoPostal}
                </p>

                <button className="btn btn-danger" onClick={handleDelete}>
                  Eliminar Paciente
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DeleteForm;
