const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({path: './conf.env'})

const app = require('./app')


app.listen(process.env.PORT, () => console.log(`Server Started at PORT -> ${process.env.PORT}`))
