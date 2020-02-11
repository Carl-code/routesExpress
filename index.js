
const express = require('express')
const app = express()

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
    const newKoder = {
        name: 'Monse',
        age: 23,
        generation: 4
    }
    koders.push(newKoder)

    response.json({
        message: 'New Koder added',
        data: {
            koders: koders
        }
    })
})

app.listen(5000, () => {
    console.log('Koders API Listening');
})