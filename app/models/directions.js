const mongoose = require('mongoose');

const directionSchema = new mongoose.Schema({
	direction: {
	  type: Object,
	  required: true
	},
	user: {
	  type: String,
	  required: true
	}
 });

 mongoose.model('Direction', directionSchema);