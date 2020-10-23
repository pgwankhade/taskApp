const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.mongodb, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

