// importamos dependencias
import ExpHbs from 'express-handlebars';
// importando el administrador de rutas
import path from 'path';

// exportando funcion de configuracion
export default (app) => {
  // 1 registro el motor de plantillas
  app.engine(
    'hbs',
    ExpHbs({
      extname: '.hbs',
      defaultLayout: 'mainLayout',
    })
  );

  // 2 establecer el motor de plantillas
  app.set('view engine', 'hbs');

  // 3 estableciendo la ruta de las vistas
  app.set('views', path.join(__dirname, '..', 'views'));

  // Retornando la referencia de la instancia de express
  return app;
};
