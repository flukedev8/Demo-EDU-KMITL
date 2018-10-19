console.log('hi node js')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `Welcom in websit ${req.body.email} Have fun! and ${req.body.password}`
  })
})

app.listen(process.env.PORT || 3000)
