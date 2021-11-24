const mongoose = require ('mongoose');
const database = "SISINVENTARIO";
const password = "admin";
const URI = 'mongodb+srv://admin:'+password+'@cluster0.ry5ax.mongodb.net/'+database+'?retryWrites=true&w=majority';

mongoose.connect(URI)
	.then(db => console.log("Atlas en linea"))
	.catch(err=> console.err(err))

module.exports = mongoose;
