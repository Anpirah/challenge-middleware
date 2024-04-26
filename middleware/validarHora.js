const horaMiddleware = require('./horaMiddleware');




function validarHora(req, res, next) {
    const hora = req.horaActual.getHours();
    if(hora >= 14 && hora <= 23) {
        next();
    } else {
        res.locals.mensaje = 'Aún no es la hora, espera hasta las 14:00 para entrar';

        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
}

module.exports = validarHora;
