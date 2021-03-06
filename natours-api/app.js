const express = require('express')
const morgan = require('morgan')

const testRoutes = require('./app/routes/testRoutes')

const app = express();

app.use(express.json())
app.use(express.static(`${__dirname}/public`))


if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

app.use('/api/v1/tests', testRoutes)



module.exports = app

