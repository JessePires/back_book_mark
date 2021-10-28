import { Router } from 'express';

// CONTROLLERS
import BookMarkController from '../app/controllers/BookMarkController';
import LinkController from '../app/controllers/LinkController';

// CRIAÇÃO DA INSTÂNCIA DO ROUTER
const router = new Router();

router.post('/',  BookMarkController.store); // CRIAÇÃO DO BOOKMARK
router.post('/create-link', LinkController.store); // CRIAÇÃO DO LINK
router.get('/:id', LinkController.show); // LISTAGEM DOS LINKS DE UM BOOKMARK

export default router;