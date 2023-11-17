import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import CreateAccountPage from './components/Auth/CreateAccountPage';
import ActivateAccount from './components/Auth/ActivateAccount';
import PasswordRecoveryPage from './components/Auth/PasswordRecoveryPage';
import './App.css'; // Asegúrate de que este archivo exista o elimina esta línea si no lo vas a usar.
import 'bootstrap/dist/css/bootstrap.min.css';

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
          // Aquí puedes añadir más rutas a otros componentes
        </Routes>
      </div>
    </Router>
  );
}

export default App;