import React, { useState } from 'react';
// Importar otros componentes necesarios y hojas de estilo aquí

const SignUp = () => {
  const [dni, setDni] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar el registro del usuario
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="dni">D.N.I.</label>
        <input
          type="text"
          id="dni"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          required
        />
        <button type="submit">Crear Cuenta</button>
      </form>
    </div>
  );
};

export default SignUp;