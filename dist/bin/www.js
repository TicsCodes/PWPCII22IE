#!/usr/bin/env node

/**
 * Module dependencies.
 */
//var app = require('../app');
"use strict";

var _app = _interopRequireDefault(require("../app"));

var _debug = _interopRequireDefault(require("debug"));

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//var debug = require('debug')('projnotes-ie22:server');
//signofica que esto se esta encadenado, importar y ejecutar lo importado
//var http = require('http');
//Creando instancia del debugger
const debug = (0, _debug.default)('projnotes-ie22:server');
/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');

_app.default.set('port', port);
/**
 * Create HTTP server.
 */


const server = _http.default.createServer(_app.default);
/**
 * Listen on provided port, on all network interfaces.
 */


server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
/**
 * Event listener for HTTP server "error" event.
 */


function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port; // handle specific listen errors with friendly messages

  switch (error.code) {
    case 'EACCES':
      //console.error(bind + ' requires elevated privileges');//concatenacion de , template strings
      console.error('${bind} requires elevated privileges');
      process.exit(1);
      break;

    case 'EADDRINUSE':
      //console.error(bind + ' is already in use');
      console.error('${bind} is alredy in use');
      process.exit(1);
      break;

    default:
      throw error;
  }
}
/**
 * Event listener for HTTP server "listening" event.
 */


function onListening() {
  //var addr = server.address();
  //var bind = typeof addr === 'string'
  //? 'pipe ' + addr
  //: 'port ' + addr.port;
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ${addr}' : 'port ${addr.port}'; //debug('Listening on ' + bind);

  debug('Listening on ${bind}');
  console.log(`🦖🦬 Servidor escuchando 🐈‍⬛🐲....en ${_app.default.get('port')}`);
}