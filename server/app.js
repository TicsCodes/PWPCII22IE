/* eslint-disable no-console */

// Ayuda a manejar errores de http
import createError from 'http-errors';
// ayuda a crear servidores web
import express from 'express';
// Nucleo de node, ayuda al manejo de las rutas
import path from 'path';
// ayuda al manejo de las cookies
import cookieParser from 'cookie-parser';
// Maneja el log de las peticiones de http
import morgan from 'morgan';
// Importando nuestro logger
import winston from '@s/config/winston';

// las rutas
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import aboutRouter from './routes/about';

// Importando modulos de webpack
// nucleo de WP
// Permite incrustar wp a express
// Permite la actualizacion dinamica de la pagina
// Configuracion
import webpackConfig from '../webpack.dev.config';

// Aqui se crea la instancia de express
const app = express();

// Recuperar el modo de ejecucion
const nodeENV = process.env.NODE_ENV || 'development';

// Decidiendo si embebemos el webpack middleware
if (nodeENV === 'development') {
  // embebiendo webpack a mi apliccacion
  console.log('🤖🤖 Ejecutando en Modo Desarrollo🤖🤖');

  // Estableciendo el modo webpack en desarrollo en el configurador
  webpackConfig.mode = 'development';

  // Configurando la ruta del HMR (Hot Module Replacement)
  // reload=true : Habilita la recarga automatica cuando un archivo js cambia
  // timeout=1000 : Tiempo de refresco de la pagina
  webpackConfig.entry = [
    'webpack-hot-middleware/client?reload=true&timeout=1000',
    webpackConfig.entry,
  ];
  // Agregando el plugin a la configuracion de desarrollo
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

  // Creando el empaquetador a partir de un objeto de configuracion
  const bundler = webpack(webpackConfig);

  // Habilitando el Middleware de webpack en express
  app.use(
    WebpackDevMiddleware(bundler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );

  // Habilitando el middleware del WP HMR
  app.use(WebpackHotMiddleware(bundler));
} else {
  console.log('👽 Ejecutando en Modo Produccion 👽');
}

// Configuracion del motor de plantillas (template engine)
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Todos los Middlewares van primer que cualquie otro middleware de la app
app.use(morgan('dev', { stream: winston.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Middleware de archivos estaticos
app.use(express.static(path.join(__dirname, '..', 'public')));

// Registrando las rutas en la app
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Exportando instancia de app usando js moderno
// module.exports = app;
export default app;
