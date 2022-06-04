/* Actions Methods */
import log from '../config/winston';

// Lista los proyectos
// GET /projects | GET /projects/index
const index = (req, res) => {
  res.send('Listando proyectos 🚧');
  // Todo: Agregar codigo de listado de proyectos
};

// Agrega ideas de proyectos
// GET /projects/add
const add = (req, res) => {
  res.render('projects/addProjectView', {});
  // Todo: Agregar codigo para agregar proyectos
};

// Procesa el formulario que Agrega ideas de proyectos
// POST /projects/add
const addPost = (req, res) => {
  const { errorData: error } = req;
  if (error) {
    log.info('Se retorna objeto de error de validacion');
    // la validacion fallo
    res.status(200).json(error);
  } else {
    log.info('Entra al metodo projectController.addpost()');
    // Desestructurando la informacion
    // del formulario
    const { validData: project } = req;
    // Regresar un objeto con los datos
    // obtenidos del formulario
    res.status(200).json(project);
  }
};

// Exportando el controlador
export default {
  index,
  add,
  addPost,
};
