import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import routes from './routes.js'
 const app = express()

mongoose.connect('mongodb://localhost:27017/detachfy', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)