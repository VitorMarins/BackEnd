const PontosTuristicos = require('../models/pontosturisticos.models');

/**
 * @desc    Retorna todos os Pontos Tur sticos
 * @route   GET /api/pontosturisticos
 * @access  Public
 */
exports.getPontosTuristicos = async (req, res) => {
  try {
    const pontosturisticos = await PontosTuristicos.find();
    res.json(pontosturisticos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


/**
 * @desc    Retorna um Ponto Tur stico espec fico
 * @route   GET /api/pontosturisticos/:id
 * @access  Public
 * @param   {string} id - ID do Ponto Turistico a ser retornado
 */
exports.getPontosTuristicosById = async (req, res) => {
    try {
      const pontosturisticos = await PontosTuristicos.findById(req.params.id);
      if (!pontosturisticos) {
        return res.status(404).json({ message: 'Ponto Turistico não encontrado.' });
      }
      res.json(pontosturisticos);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

/**
 * @desc    Cria um novo Ponto Turistico
 * @route   POST /api/pontosturisticos
 * @access  Public
 * @param   {string} nome - Nome do Ponto Turistico
 * @param   {string} descricao - Descricao do Ponto Turistico
 * @param   {number} latitude - Latitude do Ponto Turistico
 * @param   {number} longitude - Longitude do Ponto Turistico
 * @returns {object} - O Ponto Turistico criado
 */
  exports.createPontosTuristicos = async (req, res) => {
    const { nome, descricao, latitude, longitude } = req.body;
    try {
      const pontosturisticos = new PontosTuristicos({
          nome,
          descricao,
          latitude,
          longitude
      });
      await pontosturisticos.save();
      res.status(201).json(pontosturisticos);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  

/**
 * @desc    Atualiza um Ponto Turistico existente
 * @route   PATCH /api/pontosturisticos/:id
 * @access  Public
 * @param   {string} nome - Nome do Ponto Turistico
 * @param   {string} descricao - Descricao do Ponto Turistico
 * @param   {number} latitude - Latitude do Ponto Turistico
 * @param   {number} longitude - Longitude do Ponto Turistico
 * @returns {object} - O Ponto Turistico atualizado
 */
  exports.updatePontosTuristicos = async (req, res) => {
    try {
      const pontosturisticos = await PontosTuristicos.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!pontosturisticos) {
        return res.status(404).json({ message: 'Ponto Turistico não encotrado.' });
      }
      res.json(pontosturisticos);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  

/**
 * @desc    Deleta um Ponto Turistico existente
 * @route   DELETE /api/pontosturisticos/:id
 * @access  Public
 * @param   {string} id - ID do Ponto Turistico a ser deletado
 * @returns {object} - Mensagem de sucesso
 */
  exports.deletePontosTuristicos = async (req, res) => {
    try {
      const pontosturisticos = await PontosTuristicos.findByIdAndDelete(req.params.id);
      if (!pontosturisticos) {
        return res.status(404).json({ message: 'Ponto Turistico não encotrado.' });
      }
      res.json({ message: 'Ponto Turistico apagado.' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };