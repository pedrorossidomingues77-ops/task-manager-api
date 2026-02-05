const express = require('express')
const app = express();

const taskRoutes = require('./routes/routes.task')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from express')
})

app.use('/tasks', taskRoutes)

app.listen(3000, () => {
    console.log('The server is running')
})