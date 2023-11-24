import React, { useState } from "react";
import logo from "./DR TRACHTA CONSULTORIO PEDIATRICO.png";
import "./CreateAccountPage.css";

const GeneratePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const error = getPasswordValidationError(password);
    if (error) {
      setPasswordError(error);
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError("Las contraseñas no coinciden.");
      return;
    }
    // Implementar la lógica para activar la cuenta
    setPassword("");
    setConfirmPassword("");
    setPasswordError("");
  };

  const getPasswordValidationError = (password) => {
    if (password.length < 8) {
      return "La contraseña debe tener al menos 8 caracteres.";
    }
    if (!/[A-Z]/.test(password)) {
      return "La contraseña debe incluir al menos una letra mayúscula.";
    }
    if (!/[a-z]/.test(password)) {
      return "La contraseña debe incluir al menos una letra minúscula.";
    }
    if (!/[0-9]/.test(password)) {
      return "La contraseña debe incluir al menos un número.";
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return "La contraseña debe incluir al menos un símbolo (!@#$%^&*).";
    }
    return null;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#0288d1" }}>
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </nav>

      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-6">
            <div className="form-container text-right" style={{ color: "#6a6f72" }}>
              <h2 className="text-left" style={{ color: "rgb(2, 136, 209)" }}>
                Activar Cuenta
              </h2>
              <br></br>

              <form onSubmit={handleSubmit} className="bg-light p-4 shadow">
                <div className="mb-3">
                  <small>
                    La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, una letra minúscula, un número y un símbolo (!@#$%^&*).
                  </small>
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

                <div className="form-floating mb-3 position-relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="form-control"
                    id="floatingConfirmPassword"
                    placeholder="Confirmar Contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="floatingConfirmPassword">Confirmar Contraseña</label>
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="btn btn-link position-absolute top-0 end-0 mt-3 me-3"
                    style={{ zIndex: 2, textDecoration: "none" }}
                  >
                    {showConfirmPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye-fill"></i>}
                  </button>
                </div>

                {passwordError && <div className="text-danger mb-3">{passwordError}</div>}

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
                    style={{ backgroundColor: "#0288d1", color: "white", padding: "0.375rem 0.75rem" }}
                  >
                    Activar Cuenta
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

export default GeneratePassword;

