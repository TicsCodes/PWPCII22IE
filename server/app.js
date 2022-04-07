//Ayuda a manejar errores de http
import createError from 'http-errors';
//ayuda a crear servidores web
import express from 'express';
//Nucleo de node, ayuda al manejo de las rutas
import path from 'path';
//ayuda al manejo de las cookies
import cookieParser from 'cookie-parser';
//Maneja el log de las peticiones de http
import logger from 'morgan';

//las rutas
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import aboutRouter from './routes/about';

//Importando modulos de webpack
//nucleo de WP
import webpack from 'webpack';
//Permite incrustar wp a express
import WebpackDevMiddleware from "webpack-dev-middleware";
//Permite la actualizacion dinamica de la pagina
import WebpackHotMiddleware from "webpack-hot-middleware";
// Configuracion
import webpackConfig from '../webpack.dev.config';

//Aqui se crea la instancia de express
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Todos los Middlewares van primer que cualquie otro middleware de la app
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Middleware de archivos estaticos
app.use(express.static(path.join(__dirname, "..", 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Exportando instancia de app usando js moderno
//module.exports = app;
export default app;  