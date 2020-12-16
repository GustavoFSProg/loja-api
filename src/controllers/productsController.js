import productsModel from '../models/productsModel'

async function create(req, res) {
  try {
    // res.status(201).send({ msg: 'controller' })

    const { filename: image } = req.file

    const [name] = image.split('.')
    const filename = `${name}.jpg`

    await productsModel.create({
      title: req.body.title,
      slug: req.body.slug,
      description: req.body.description,
      price: req.body.price,
      image: filename,
    })

    return res.status(201).send({ message: 'Produto criado com sucesso!!' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function getAll(req, res) {
  try {
    const data = await productsModel.find()

    return res.status(201).send(data)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function getById(req, res) {
  try {
    const data = await productsModel.findById(req.params.id)

    return res.status(201).send(data)
  } catch (error) {
    return res.status(400).send({ msg: 'Deu Erro!' })
  }
}

async function apagar(req, res) {
  try {
    await productsModel.findByIdAndRemove(req.params.id)

    return res.status(200).send({ msg: 'Deu certo tudo apagado!!' })
  } catch (error) {
    return res.status(400).send({ msg: 'Deu erro tudo cagado!!' })
  }
}

async function update(req, res) {
  try {
    await productsModel.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        slug: req.body.slug,
        description: req.body.description,
        price: req.body.price,
      },
    })

    return res.status(200).send({ msg: 'Update som sucesso!' })
  } catch (error) {
    return res.status(400).send(error)
  }
}

export default { update, apagar, create, getById, getAll }
