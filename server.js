//1. Primeramente creamos una instancia de express
const express  = require('express')
//2. Creamos una instancia dela aplicacion
const app = express()
//3. Definimos el numero de puerto de la app web
const port = 3001

const userRouters = require('./app/routes/user')
//4. Declaramos la ruta para probar nuestra app
app.use(userRouters)
//5. Ahora arrancamos la aplicacion web
//   y mostramos un mensaje por consola para 
//   asegurarnos que si se pudo levantar la app
app.listen(port, () => {
    console.log('La aplicacion esta en linea OK!')
})
//6. Finalmente agregamos una linea en package.json
//   (ir al archivo para ver el cambio y ver OJO)