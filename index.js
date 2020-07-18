const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())

const bodyParser = require('body-parser')
var router = express.Router()
const port = 3000;
/**
 * get the lib
 */
require('./lib/socket');
/**
 * body-parser 
 * Node.js body parsing middleware.
 */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/**
 * custome Routes
 */
app.use('/api/v1', require('./routes/index.routes'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))