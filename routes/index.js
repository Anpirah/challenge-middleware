const express = require('express');
const obtenerHoraActual = require('../middleware/horaMiddleware.js');
const router = express.Router();



router.get('/',obtenerHoraActual, (req, res) => {
   
    const horaActual = req.horaActual.toLocaleTimeString(); 
    
    if(req.query.mensaje){
        res.send(`<h1>Bienvenido a mi aplicación</h1>
        <p>Hora actual: ${horaActual}</p>
        <p>Aún no es la hora, espera hasta las 14:00 para entrar</p>
        <form action="/" method="GET">
            <button type="submit">Volver</button>
        </form>`)

    } else (
        res.send(`<h1>Bienvenido a mi aplicación</h1>
        <p>Hora actual: ${horaActual}</p>
        <form action="/endroute" method="GET">
            <button type="submit">Ir a Endroute</button>
        </form>`)
    )
    
    
});



module.exports = router;

