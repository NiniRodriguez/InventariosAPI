//const express = require('express');
const express = require ('express');
const cors = require('cors');
const morgan = require ('morgan');
const mongoose = require ('./connection');
const app = express ();

//Configuracion 
app.set('port', process.env.PORT || 3000)
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

//Lista de rutas base
app.use('/api/usuarios',require('./routes/usuarios.routes'));

//Arranque
app.listen(app.get('port'), ()=>{
	console.log(process.env.mpn_package_name + "iniciado en puerto" + app.get('port'))
});
