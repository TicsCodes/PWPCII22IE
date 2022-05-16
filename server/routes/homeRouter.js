// Importando Exprexx Router
import { Router } from 'express';
// Importanto el controlador home
import homeController from '../controllers/homeController';

// Se creara una instancia en Router
const router = new Router();

// Get "/"
router.get(['/', '/home'], homeController.index);

// Get "/about"//
router.get('/about', homeController.about);

// Exportando Router
export default router;
router.get('/', homeController.index);
