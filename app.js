const express = require('express');
const app = express();
const indexRouter = require('./routes/index.js');
const endrouteRouter = require('./routes/endRoute.js');
const port = 3000;

app.use('/', indexRouter);
app.use('/endroute', endrouteRouter);

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
