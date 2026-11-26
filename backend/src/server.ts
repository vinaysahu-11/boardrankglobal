import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import healthRouter from './routes/health'
import { errorHandler, notFoundHandler } from './middleware/errorHandler'

const app = express()
const port = Number(process.env.PORT || 4000)

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use('/api', healthRouter)

app.use(notFoundHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Boardrank backend listening on http://localhost:${port}`)
})
