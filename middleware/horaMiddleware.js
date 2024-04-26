function obtenerHoraActual(req, res, next) {
    
    req.horaActual = new Date();
    next();
}

module.exports = obtenerHoraActual;
