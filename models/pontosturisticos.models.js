const mongoose = require('mongoose');

const PontosTuristicosSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
});

module.exports = mongoose.model('PontosTuristicos', PontosTuristicosSchema);