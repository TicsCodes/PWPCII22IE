// Importando Exprexx Router
import { Router } from 'express';
// Importanto el controlador home
import homeController from '../controllers/homeController';

// Se creara una instancia en Router
const router = new Router();

// Get "/"
router.get('/', homeController.index);

// Exportando Router
export default router;
