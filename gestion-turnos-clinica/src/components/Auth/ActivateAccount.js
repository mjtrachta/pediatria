import React, { useState } from 'react';
// Importar otros componentes necesarios y hojas de estilo aquí

const ActivateAccount = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar la activación de la cuenta
  };

  return (
    <div className="activate-account-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Contraseña Nueva</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="confirm-password">Repite Contraseña Nueva</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Activar Cuenta</button>
      </form>
    </div>
  );
};

export default ActivateAccount;