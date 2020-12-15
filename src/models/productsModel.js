import { model, Schema } from 'mongoose'

const schema = new Schema({
  title: {
    type: String,
    unique: true,
    index: true,
    required: true,
  },
  description: {
    type: String,
  },
  slug: {
    type: String,
  },
  image: {
    type: Array[String],
  },

  price: {
    type: Number,
  },
})

export default model('productsModel', schema)
