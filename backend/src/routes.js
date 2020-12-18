import {Router} from 'express'
import multer from 'multer';

import userController from './controllers/userController.js'
import SessionController from './controllers/sessionController';
import productController from './controllers/productController';

import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);


routes.post('/sessions', SessionController.create);

routes.post('/user', userController.store)

routes.get('/product', productController.index)
routes.get('/product/:id', productController.show)
routes.post('/product', upload.array('images') , productController.store)



export default routes