require('dotenv').config();
const express = require('express')
const userRouter = require('./routes/user.routes')
const cors = require('cors')
const db = require('./db')
const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', userRouter)

db.authenticate().catch(e => console.log(e))
app.listen(PORT, () => console.log(`Server has started`))