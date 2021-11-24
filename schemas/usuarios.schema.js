const mongoose = require ('mongoose');
const { Schema } = mongoose;

const esquema = new Schema({
	nombre : { type: String, required: true },
	identificacion : { 
		tipo : { type: String, required: true },
		numero : { type: Number, required: true },
	direccion : { type: String, required: true },
	celular: { type: Number, required: true },
	email : { type: String, required: true },
	}
});

module.exports = mongoose.model('Usuario', esquema);
