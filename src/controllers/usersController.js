import md5 from 'md5'
import usersModel from '../models/usersModel'

async function create(req, res) {
  try {
    await usersModel.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password, process.env.SALT_KEY),
    })

    return res.status(201).send({ message: 'Cadastro feito com sucesso!!' })
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function getUsers(req, res) {
  try {
    const data = await usersModel.find()

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function getById(req, res) {
  try {
    const data = await usersModel.findById(req.params.id)

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send(error)
  }
}

export default { create, getById, getUsers }
