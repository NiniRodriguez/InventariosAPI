const coleccionUusuarios = require('../schemas/clientes.schema')
const operaciones = {};

operaciones.getUsuarios = async function(req, res) {
	try {	
		const usuarios = await coleccionUsuarios.find(req.query)
		if (usuarios!=null) {
			res.status(200).json(usuarios);
		}
		else {
			res.status(404).json({message: "Not found"})
		}
	}
	catch(err) {
		res.status(400).json({message: "Bad request"})
	}
}

operaciones.getUsuario = async function(req, res) {
	try {
		const usuario = await coleccionUsuario.findById(req.params.id)
		if (usuario != null) {
			res.status(200).json(usuario);	
		}
		else {
			res.status(404).json({message: "Not found"})	
		}
	}
	catch(err) {
		res.status(400).json({message: "Bad request"})
	}
}

operaciones.guardarUsuario = async function(req, res) {
	try {
		const usuario = new coleccionUsuarios(req.body)
		await usuario.save()
		res.status(201).json(usuario);	
	}
	catch(err) {
		res.status(400).json({message: "Bad request"})	
	}
}

operaciones.actualizarUsuario = async function(req, res) {
	try {
		const usuario = {
			nombre: req.body.nombre,
	    	identificacion : {
	    		tipo: req.body.identificacion.tipo,
	        	numero: req.body.identificacion.numero
	        direccion: req.body.direccion,
	        celular: req.body.celular,
	        email: req.body.email
	        }
		}
		await coleccionUsuarios.findByIdAndUpdate(req.params.id, {$set: usuario}, {new: true});
		res.status(200).json(usuario);
	}
	catch(err) {
		res.status(400).json({message: "Bad request"})	
	}
}

operaciones.borrarUsuario = async function(req, res) {
	try {
		const usuario = await coleccionUsuarios.findByIdAndRemove(req.params.id);
		if (usuario != null) {
			res.status(200).json({message: "Deleted"});	
		}
		else {
			res.status(404).json({message: "Not found"})	
		}
	}
	catch(err) {
		res.status(400).json({message: "Bad request"})		
	}

}

module.exports = operaciones