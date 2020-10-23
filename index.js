const express = require('express')
require('./src/db/mongoose')
const userRouter = require('./src/routers/user')
const taskRouter = require('./src/routers/task')
const User = require('./src/models/user')
const auth = require('./src/middleware/auth')
require('dotenv').config()

const app = express()
const port = process.env.PORT||3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

