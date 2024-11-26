const express = require('express');
const {
    getPontosTuristicos,
    getPontosTuristicosById,
    createPontosTuristicos,
    updatePontosTuristicos,
    deletePontosTuristicos,
  } = require('../controllers/pontosturisticos.controller');
const router = express.Router();

/**
 * @swagger
 * /pontosturisticos:
 *   get:
 *     summary: Retorna todos os Pontos Turísticos
 *     tags:
 *       - Pontos Turísticos
 *     responses:
 *       200:
 *         description: Lista de Pontos Turísticos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PontoTuristico'
 */
router.get('/', getPontosTuristicos);

/**
 * @swagger
 * /pontosturisticos/{id}:
 *   get:
 *     summary: Retorna um Ponto Turístico específico
 *     tags:
 *       - Pontos Turísticos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do Ponto Turístico
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dados do Ponto Turístico
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PontoTuristico'
 *       404:
 *         description: Ponto Turístico não encontrado
 */
router.get('/:id', getPontosTuristicosById);

/**
 * @swagger
 * /pontosturisticos:
 *   post:
 *     summary: Cria um novo Ponto Turístico
 *     tags:
 *       - Pontos Turísticos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PontoTuristico'
 *     responses:
 *       201:
 *         description: Ponto Turístico criado com sucesso
 */
router.post('/', createPontosTuristicos);

/**
 * @swagger
 * /pontosturisticos/{id}:
 *   patch:
 *     summary: Atualiza um Ponto Turístico existente
 *     tags:
 *       - Pontos Turísticos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do Ponto Turístico
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PontoTuristico'
 *     responses:
 *       200:
 *         description: Ponto Turístico atualizado com sucesso
 *       404:
 *         description: Ponto Turístico não encontrado
 */
router.patch('/:id', updatePontosTuristicos);

/**
 * @swagger
 * /pontosturisticos/{id}:
 *   delete:
 *     summary: Deleta um Ponto Turístico existente
 *     tags:
 *       - Pontos Turísticos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do Ponto Turístico
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ponto Turístico deletado com sucesso
 *       404:
 *         description: Ponto Turístico não encontrado
 */
router.delete('/:id', deletePontosTuristicos);

module.exports = router;
