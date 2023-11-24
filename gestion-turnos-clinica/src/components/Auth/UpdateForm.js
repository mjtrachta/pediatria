// UpdatePatientForm.js
import React, { useState } from 'react';
import logo from './DR TRACHTA CONSULTORIO PEDIATRICO.png';
import "./CreateAccountPage.css";

const UpdatePatientForm = () => {
  const [patientData, setPatientData] = useState({
    nombre: '',
    apellido: '',
    tipoDocumento: 'DNI',
    numeroDocumento: '',
    pais: '',
    fechaNacimiento: '',
    sexo: 'Masculino',
    domicilio: '',
    provincia: '',
    codigoPostal: '',
    obraSocial: '',
    numeroAfiliado: '',
    plan: '',
    telefonoMovil: '',
    telefonoFijo: ''
    // Añade aquí otros campos si es necesario
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar la actualización de los datos del paciente
    console.log('Datos del paciente para actualizar:', patientData);
    // Aquí enviarías los datos a tu servidor o API de backend
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPatientData(prevData => ({
      ...prevData,
      [name]: value
    }));
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
          Actualizar Datos del Paciente
        </h2>
        <form className="needs-validation" novalidate onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* Nombre y Apellido */}
            <div className="col-md-6">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre" name="nombre" value={patientData.nombre} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <label htmlFor="apellido" className="form-label">Apellido</label>
              <input type="text" className="form-control" id="apellido" name="apellido" value={patientData.apellido} onChange={handleChange} required />
            </div>

            {/* Tipo y Número de Documento */}
            <div className="col-md-4">
              <label htmlFor="tipoDocumento" className="form-label">Tipo de Documento</label>
              <select className="form-select" id="tipoDocumento" name="tipoDocumento" value={patientData.tipoDocumento} onChange={handleChange} required>
                <option value="DNI">DNI</option>
                {/* Añade aquí más tipos de documento si es necesario */}
              </select>
            </div>
            <div className="col-md-8">
              <label htmlFor="numeroDocumento" className="form-label">Número de Documento</label>
              <input type="text" className="form-control" id="numeroDocumento" name="numeroDocumento" value={patientData.numeroDocumento} onChange={handleChange} required />
            </div>

            {/* Fecha de Nacimiento y Sexo */}
            <div className="col-md-4">
              <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
              <input type="date" className="form-control" id="fechaNacimiento" name="fechaNacimiento" value={patientData.fechaNacimiento} onChange={handleChange} required />
            </div>
            <div className="col-md-4">
              <label htmlFor="sexo" className="form-label">Sexo</label>
              <select className="form-select" id="sexo" name="sexo" value={patientData.sexo} onChange={handleChange} required>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                {/* Añade aquí más opciones si es necesario */}
              </select>
            </div>

            {/* Contacto */}
            <div className="col-md-4">
              <label htmlFor="telefonoMovil" className="form-label">Teléfono Móvil</label>
              <input type="tel" className="form-control" id="telefonoMovil" name="telefonoMovil" value={patientData.telefonoMovil} onChange={handleChange} required />
            </div>
            <div className="col-md-4">
              <label htmlFor="telefonoFijo" className="form-label">Teléfono Fijo</label>
              <input type="tel" className="form-control" id="telefonoFijo" name="telefonoFijo" value={patientData.telefonoFijo} onChange={handleChange} />
            </div>

            {/* Domicilio */}
            <div className="col-md-8">
              <label htmlFor="domicilio" className="form-label">Domicilio</label>
              <input type="text" className="form-control" id="domicilio" name="domicilio" value={patientData.domicilio} onChange={handleChange} />
            </div>
            <div className="col-md-4">
              <label htmlFor="codigoPostal" className="form-label">Código Postal</label>
              <input type="text" className="form-control" id="codigoPostal" name="codigoPostal" value={patientData.codigoPostal} onChange={handleChange} />
            </div>

            {/* Otros Datos */}
            <div className="col-md-12">
              <label htmlFor="obraSocial" className="form-label">Obra Social/Prepaga/Programa</label>
              <input type="text" className="form-control" id="obraSocial" name="obraSocial" value={patientData.obraSocial} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="numeroAfiliado" className="form-label">Número de Afiliado</label>
              <input type="text" className="form-control" id="numeroAfiliado" name="numeroAfiliado" value={patientData.numeroAfiliado} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="plan" className="form-label">Plan</label>
              <input type="text" className="form-control" id="plan" name="plan" value={patientData.plan} onChange={handleChange} />
            </div>

            <div className="col-12">
              <button className="btn btn-primary" type="submit">Actualizar Datos</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdatePatientForm;
