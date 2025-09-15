import express from 'express'
import dotenv from 'dotenv'
import router from './routes'

dotenv.config()

const app = express()
app.use(express.json())
app.use(router)

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})