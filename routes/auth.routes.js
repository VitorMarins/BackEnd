const express = require('express');
const { registrar, login } = require('../controllers/auth.controller');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Operações de autenticação (login e cadastro)
 */

/**
 * @swagger
 * /api/auth/registrar:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome de usuário do novo usuário
 *               senha:
 *                 type: string
 *                 description: Senha do novo usuário
 *             required:
 *               - username
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Dados inválidos ou já existe um usuário com esse e-mail
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/registrar', registrar);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Realiza login de um usuário existente
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: E-mail ou nome do usuário
 *               senha:
 *                 type: string
 *                 description: Senha do usuário
 *             required:
 *               - nome
 *               - senha
 *     responses:
 *       200:
 *         description: Login bem-sucedido, retorna um token de acesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token de acesso gerado para o usuário
 *       401:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/login', login);

module.exports = router;