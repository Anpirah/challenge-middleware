const express = require('express');
const router = express.Router();

const validarHora = require('../middleware/validarHora.js')
const horaMiddleware = require('../middleware/horaMiddleware.js')


router.get('/',horaMiddleware, validarHora, (req, res) => {
    res.send(`
        <h1>Ruta final</h1>
        <p>Bienvenido a la ruta final.</p>
    `);
});



module.exports = router;
