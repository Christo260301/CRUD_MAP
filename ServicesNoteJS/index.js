//Llamamos la conexion realizada en la carpeta config
require('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000);
const app = express();

//Este fragmento admite el tipo de dato
app.use(express.json())

//Se configura el puerto donde se ejecutara el servidor
app.set('port',port);

//Rutas que seran utilizadas 
app.use('/api', require('./rutas'));

//En esta configuracion iniciamos express
app.listen(app.get('port'),(error)=>{
    if(error){
        console.log('Error al iniciar el servidor: ' + error)
    } else {
        console.log('Servidor iniciado: ' + port )
    }
});