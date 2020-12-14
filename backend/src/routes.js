import {Router} from 'express'

import userController from './controllers/userController.js'
import SessionController from './controllers/sessionController';
import productController from './controllers/productController';

const routes = Router();


routes.post('/sessions', SessionController.create);

routes.post('/user', userController.store)

routes.get('/product', productController.index)
routes.post('/product', productController.store)



export default routes