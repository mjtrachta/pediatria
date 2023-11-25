// PatientSearchAndUpdateForm.js
import React, { useState } from 'react';
import logo from "../../components/assets/images/DR TRACHTA CONSULTORIO PEDIATRICO.png";


const PatientSearchAndUpdateForm = () => {
  // Estado para la búsqueda del paciente
  const [searchTerms, setSearchTerms] = useState({
    tipoDocumento: '',
    numeroDocumento: '',
  });

  // Estado para los datos del paciente
  const [patientData, setPatientData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefonoMovil: '',
    telefonoFijo: '',
    fechaNacimiento: '',
    sexo: '',
    pais: '',
    provincia: '',
    ciudad: '',
    domicilio: '',
    codigoPostal: '',
  });

  // Manejador para los cambios en los campos de búsqueda
  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchTerms({ ...searchTerms, [name]: value });
  };

  // Manejador para el envío del formulario de búsqueda
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Aquí deberías hacer la llamada a la API para obtener los datos del paciente
    console.log('Buscar paciente con:', searchTerms);

    // Simulamos la respuesta de la API asignando los valores directamente
    setPatientData({
      ...patientData,
      // Suponemos que estos datos vienen de la API en respuesta a la búsqueda
      nombre: 'Juan',
      apellido: 'Pérez',
      // ... agregar los valores simulados para los otros campos
    });
  };

  // Manejador para los cambios en los campos de datos del paciente
  const handlePatientDataChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  // Manejador para el envío del formulario de actualización
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    // Aquí deberías hacer la llamada a la API para actualizar los datos del paciente
    console.log('Actualizar paciente con:', patientData);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#0288d1" }}>
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </nav>

      <div className="container mt-5">
        <h2 className="text-center" style={{ color: "rgb(2, 136, 209)" }}>
          Buscar y Actualizar Paciente
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
              <button className="btn btn-primary" type="submit">Buscar Paciente</button>
            </div>
          </div>
        </form>
        </div>
        </div>

        {/* Formulario de actualización */}
        {Object.values(patientData).some(value => value) && ( // Solo se muestra si hay algún dato de paciente
          <div className="col-md-5 container mt-6">
          <div className="row justify-content-center">
            <form
              className="bg-light p-4 shadow-sm needs-validation"
              noValidate
              onSubmit={handleUpdateSubmit}
            >
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  value={patientData.nombre}
                  onChange={handlePatientDataChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="apellido">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  id="apellido"
                  name="apellido"
                  value={patientData.apellido}
                  onChange={handlePatientDataChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="telefonoMovil">Teléfono Móvil</label>
                <input
                  type="tel"
                  className="form-control"
                  id="telefonoMovil"
                  name="telefonoMovil"
                  value={patientData.telefonoMovil}
                  onChange={handlePatientDataChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="telefonoFijo">Teléfono Fijo</label>
                <input
                  type="tel"
                  className="form-control"
                  id="telefonoFijo"
                  name="telefonoFijo"
                  value={patientData.telefonoFijo}
                  onChange={handlePatientDataChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={patientData.email}
                  onChange={handlePatientDataChange}
                />
              </div>
              
              <div className="col-md-4">
                <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                <input
                  type="date"
                  className="form-control"
                  id="fechaNacimiento"
                  name="fechaNacimiento"
                  value={patientData.fechaNacimiento}
                  onChange={handlePatientDataChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="sexo">Sexo</label>
                <select
                  className="form-select"
                  id="sexo"
                  name="sexo"
                  value={patientData.sexo}
                  onChange={handlePatientDataChange}
                  required
                >
                  <option value="">Seleccione</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                  {/* Agregar más opciones según sea necesario */}
                </select>
              </div>
              <div className="col-md-4">
                <label htmlFor="pais">País</label>
                <input
                  type="text"
                  className="form-control"
                  id="pais"
                  name="pais"
                  value={patientData.pais}
                  onChange={handlePatientDataChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="provincia">Provincia</label>
                <input
                  type="text"
                  className="form-control"
                  id="provincia"
                  name="provincia"
                  value={patientData.provincia}
                  onChange={handlePatientDataChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="ciudad">Ciudad</label>
                <input
                  type="text"
                  className="form-control"
                  id="ciudad"
                  name="ciudad"
                  value={patientData.ciudad}
                  onChange={handlePatientDataChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="domicilio">Domicilio</label>
                <input
                  type="text"
                  className="form-control"
                  id="domicilio"
                  name="domicilio"
                  value={patientData.domicilio}
                  onChange={handlePatientDataChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="codigoPostal">Código Postal</label>
                <input
                  type="text"
                  className="form-control"
                  id="codigoPostal"
                  name="codigoPostal"
                  value={patientData.codigoPostal}
                  onChange={handlePatientDataChange}
                />
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">Actualizar Datos</button>
              </div>
            </div>
          </form>
          </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PatientSearchAndUpdateForm;
