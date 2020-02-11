
const express = require('express')
const app = express()

app.use(express.json())

const koders = [
  {
    name: 'Carlos',
    age: 25,
    generation: 4
  },
  {
    name: 'Pedro',
    age: 28,
    generation: 4
  },
  {
    name: 'Jose',
    age: 23,
    generation: 5
  }
]
//Creación de rutas
app.get('/koders', (request, response) => {
    response.json({
        message: 'todos los koders',
        data: {
            koders: koders
        }
    })
})

app.post('/koders', (request, response) => {
    //Recibimos los datos, deconstruimos el objeto
    const {
        name,
        age,
        generation
    } = request.body

    koders.push({
        name,
        age,
        generation
    })

    response.json({
        message: 'New Koder added',
        data: {
            koders: koders
        }
    })
})

app.delete('/koders/:index', (request, response) => {
    const index = request.params
} )

app.listen(5000, () => {
    console.log('Koders API Listening');
})