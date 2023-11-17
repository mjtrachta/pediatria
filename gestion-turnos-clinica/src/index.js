import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Asegúrate de que este archivo exista o elimina esta línea si no lo vas a usar.
import App from './App';
// Si tienes reportWebVitals, lo puedes mantener, de lo contrario elimina la importación y el llamado a la función.
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();