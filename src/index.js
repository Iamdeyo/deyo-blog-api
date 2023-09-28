import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()


/**
 * Application level middleware
 **/
app.use(express.json())



app.get('/', (req, res) => res.send('Hello World!'))



const PORT = process.env.PORT

app.listen(PORT, () => {console.log(`http://localhost:${PORT}`)})