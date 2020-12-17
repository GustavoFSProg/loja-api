import Router from 'express'
import multer from 'multer'
import productsController from '../controllers/productsController'

import uploadConfig from '../config/uploadConfig'

const upload = multer(uploadConfig)

const route = new Router()

route.get('/', productsController.getAll)
route.delete('/delete/:id', productsController.apagar)
route.get('/:id', productsController.getById)
route.post('/product', upload.single('image'), productsController.create)
route.put('/update/:id', productsController.update)

export default route
