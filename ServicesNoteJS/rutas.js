const rutas = require('express').Router()
const conexion = require('./config/conexion')


//Aqui agregamos todas las rutas

//Get de los Usuarios
rutas.get('/',(req, res)=>{
    let sql = 'select * from usuario'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//Get un Usuario
rutas.get('/:id',(req, res)=>{
    const {id} = req.params
    let sql = 'select * from usuario where id = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})


//Agregar un Usuario a la BD
rutas.post('/',(req, res)=>{
    const{nombre, a_paterno, a_materno, telefono, rfc} = req.body

    let sql = `insert into usuario (nombre, a_paterno, a_materno, telefono, rfc) 
                values ('${nombre}','${a_paterno}','${a_materno}','${telefono}','${rfc}');`
    
    conexion.query(sql, (err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Usuario Agregado'})
        }
    })
});

//Actualizar un Usuario de la BD
rutas.put('/:id', (req, res)=>{
    const{id} = req.params
    const{nombre, a_paterno, a_materno, telefono, rfc} = req.body

    let sql = `update usuario set 
               nombre = '${nombre}',
               a_paterno = '${a_paterno}',
               a_materno = '${a_materno}',
               telefono = '${telefono}',
               rfc = '${rfc}'
               where id = '${id}'`

    conexion.query(sql, (err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Usuario Modificado'})
        }
    })
})

//Eliminar un Usuario de la BD
rutas.delete('/:id', (req, res)=>{
    const{id} = req.params

    let sql = `delete from usuario where id = '${id}'`
    conexion.query(sql, (err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Usuario Eliminado'})
        }
    })
});

module.exports = rutas;