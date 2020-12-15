import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

mongoose.connect(process.env.DATABASE_CONECTION)

const api = express()

const { PORT } = process.env

api.use(express.json())
api.use(cors())
api.use('/', () => console.log('Api: 1.0'))

api.listen(PORT, () => {
  console.log('Entrou na API')
})

export default api
