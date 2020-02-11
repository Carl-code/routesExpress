
const express = require('express')
const app = express()

//Creación de rutas
app.get('/koders', (request, response) => {
    response.json({
        message: 'todos los koders',
        data: {
            koders: []
        }
    })
})

app.listen(5000, () => {
    console.log('Koders API Listening');
})