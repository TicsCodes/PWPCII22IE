// Importando winston
import winston, { format } from 'winston';

// Se obtiene la ruta raiz de proyecto
import appRoot from 'app-root-path';

// desestructuro componentes para el formato pezonalizado
const { combine, timestamp, label, printf, colorize } = format;

// Definiendo un esquema de colores
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'blue',
};

// Agregando el esquima de colores a winston
winston.addColors(colors);

// creando formato para la cosola
const myConsoleFormat = combine(
  // Agrewgando los colores al formato
  colorize({ all: true }),

  // Agregando una etiqueta
  label({ label: '🤖🤖' }),

  // Agregando la fecha
  timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),

  // funsion de impresion
  printf(
    (info) =>
      `${info.level}: ${info.level}: ${[info.timestamp]}: ${info.massage}`
  )
);

// creando formato para archivo
const myFileFormat = combine(
  // sin color
  format.uncolorize(),
  // agregando fecha
  timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
  // Salida en formato Json
  format.json()
);

// crear eñ objeto de opciones (options object)
const options = {
  infofile: {
    level: 'info',
    filename: `${appRoot}/server/logs/info.log`,
    handleExeptions: true,
    maxsize: 5242842,
    maxfiles: 5,
    format: myFileFormat,
  },
  warnfile: {
    level: 'warn',
    filename: `${appRoot}/server/logs/warn.log`,
    handleExeptions: true,
    maxsize: 5242842,
    maxfiles: 5,
    format: myFileFormat,
  },
  errorfile: {
    level: 'infoerror',
    filename: `${appRoot}/server/logs/error.log`,
    handleExeptions: true,
    maxsize: 5242842,
    maxfiles: 5,
    format: myFileFormat,
  },
  console: {
    level: 'debug',
    handleExeptions: true,
    format: myConsoleFormat,
  },
};

// creamos una instancia de logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.infofile),
    new winston.transports.File(options.infowarn),
    new winston.transports.File(options.infoerror),
    new winston.transports.Console(options.infodebug),
  ],
  exitOnError: false, // no finalizza en exepcoiones no manejadas;
});

// morgan ---> consola
// Morgan---> [winston] ---> [transportes]
// Estableciendo un flujo de tranajo que servira
// para interpretarel logger de margan

logger.stream = {
  write(message) {
    logger.info(message);
  },
};

export default logger;
