const mysql = require('mysql');

//Se realiza la conexion con nuestra base de datos
const conexion = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'root',
    port: 3306,
    database: 'maps_db'
});

//Verificamos si existen errores en la conexion mostrando en consola
conexion.connect((err)=>{
    if(err){
        console.log("Ha ocurrido un error: " + err)
    } else {
        console.log("Base de datos se ha conectado!!!")
    }
})

module.exports = conexion;