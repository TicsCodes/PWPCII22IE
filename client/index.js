/* eslint-disable no-console */
/* global M */

// Incorporando los estilos a mi bundle
import './styles/mystyles.css';

/* Inicializando elementos de materializecss */
document.addEventListener('DOMContentLoaded', () => {
  // Obteniendo la referencia a la barra de navegacion lateral
  const sideNavs = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sideNavs);
});
