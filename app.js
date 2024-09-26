const express = require('express');
const router = express.Router();
const salaController = require('../controllers/salaController');

// Definindo as rotas
router.get('/', salaController.getAllSalasDeAula);
router.get('/:id', salaController.getSalasDeAulaByID);
router.post('/', salaController.insertSalasDeAula);
router.put('/:id', salaController.updateSalasDeAula);
router.delete('/:id', salaController.deleteSalasDeAula);

module.exports = router;
