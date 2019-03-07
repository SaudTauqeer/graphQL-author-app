const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
	name: String,
	genre: String,
	authorId: String
});

module.exports = new mongoose.model('Book', BookSchema);
