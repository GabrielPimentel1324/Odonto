// backend/routes/tableRoutes.js
const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tableController');

// Rota para criar um novo valor na tabela
router.post('/add', tableController.addValue);

// Rota para obter todos os valores da tabela
router.get('/values', tableController.getAllValues);

module.exports = router;
