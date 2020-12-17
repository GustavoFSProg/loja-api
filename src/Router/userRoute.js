import Router from 'express'
import usersController from '../controllers/usersController'

const UserRoute = new Router()

UserRoute.post('/user', usersController.create)
UserRoute.get('/users', usersController.getUsers)

export default UserRoute
