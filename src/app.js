const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const db = require('./utils/db')
const initModels = require('./models/initmodel')
const usersRoutes = require('./routes/users.routes')
const todoRoutes = require('./routes/todo.routes')


initModels()

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

const port = 8000

db.authenticate()
.then(() => {
console.log('Database conect')
})
.catch((error) => console.log(error))

db.sync( {alter: false} )
.then(() => console.log('DataBase sync'))
.catch((error) => console.log(error))

app.use(usersRoutes)
app.use(todoRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to server')
})

app.listen(port, () =>{
    console.log(`Server in port ${port}`)
})

