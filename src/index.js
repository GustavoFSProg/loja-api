import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import path from 'path'
import route from './Router'

dotenv.config()

mongoose.connect(process.env.DATABASE_CONECTION)

const api = express()

const { PORT } = process.env

api.use(express.json())
api.use(cors())
api.use('/', route)

api.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

api.listen(PORT, () => {
  console.log('Entrou na API')
})

export default api