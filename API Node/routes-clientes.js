const express = require('express');
const routes_clientes = express.Router()

routes_clientes.get('/',(req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * from clientes', (err,rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})


routes_clientes.post('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO clientes set ?', [req.body], (err,rows)=>{
            if(err) return res.send(err)

            res.send('Datos insertados correctamente!')
        })
    })
})

routes_clientes.delete('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM clientes WHERE id=?', [req.params.id], (err,rows)=>{
            if(err) return res.send(err)

            res.send('El dato seleccionado se elimino correctamente!')
        })
    })
})

routes_clientes.put('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE clientes SET ? WHERE id=?', [req.body,req.params.id], (err,rows)=>{
            if(err) return res.send(err)

            res.send('Datos actualizados correctamente!')
        })
    })
})
module.exports = routes_clientes