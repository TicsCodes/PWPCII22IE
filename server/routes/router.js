// Importando el enrutador de Home
import homeRouter from './homeRouter';

// Funcion que agrega todos los enrutadores
// a la aplicacion express
const addRoutes = (app) => {
  /* Gregando enrutador a Home */
  app.use('/', homeRouter);
};

// module.exports = router;
export default {
  addRoutes,
};
