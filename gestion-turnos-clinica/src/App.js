import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import CreateAccountPage from './components/Auth/CreateAccountPage';
import ActivateAccount from './components/Auth/ActivateAccount';
import PasswordRecoveryPage from './components/Auth/PasswordRecoveryPage';
import TurnosPage from './components/Turnos/TurnosPage'
import GeneratePassword from './components/Auth/GeneratePassword';
import Form from './components/Patients/Form';
import UpdateForm from './components/Patients/UpdateForm'
import DeleteForm from './components/Patients/DeleteForm';
import AppointmentList from './components/Turnos/AppointmentList'
import CalendarProfesional from './components/Calendario/CalendarProfesional';
import './App.css'; // Asegúrate de que este archivo exista o elimina esta línea si no lo vas a usar.
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from 'react-calendar';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/crear-cuenta" element={<CreateAccountPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/activate" element={<ActivateAccount />} />
          <Route path="/forgot-password" element={<PasswordRecoveryPage />} />
          <Route path="/turnos" element={<TurnosPage />} />
          <Route path="/generate-password" element={<GeneratePassword />} />
          <Route path="/form" element={<Form />} />
          <Route path="/updateform" element={<UpdateForm />} />
          <Route path="/deleteform" element={<DeleteForm />} />
          <Route path="/appointment" element={<AppointmentList />} />
          <Route path="/calendar" element={<CalendarProfesional />} />
          // Aquí puedes añadir más rutas a otros componentes
        </Routes>
      </div>
    </Router>
  );
}

export default App;