const salaModel = require('../models/salaModel');

// 1. GetAllSalasDeAula
exports.getAllSalasDeAula = (req, res) => {
    salaModel.getAllSalasDeAula((err, results) => {
        if (err) return res.status(500).json({ message: 'Erro ao buscar as salas de aula' });
        res.json(results);
    });
};

// 2. GetSalasDeAulaByID
exports.getSalasDeAulaByID = (req, res) => {
    const { id } = req.params;
    salaModel.getSalasDeAulaByID(id, (err, result) => {
        if (err) return res.status(500).json({ message: 'Erro ao buscar a sala de aula' });
        if (!result) return res.status(404).json({ message: 'Sala de aula não encontrada' });
        res.json(result);
    });
};

// 3. InsertSalasDeAula
exports.insertSalasDeAula = (req, res) => {
    const { descricao, localizacao, capacidade } = req.body;
    salaModel.insertSalasDeAula(descricao, localizacao, capacidade, (err, salaId) => {
        if (err) return res.status(500).json({ message: 'Erro ao inserir a sala de aula' });
        res.json({ message: 'Sala de aula inserida com sucesso', salaId });
    });
};

// 4. UpdateSalasDeAula
exports.updateSalasDeAula = (req, res) => {
    const { id } = req.params;
    const { descricao, localizacao, capacidade } = req.body;
    salaModel.updateSalasDeAula(id, descricao, localizacao, capacidade, (err, success) => {
        if (err) return res.status(500).json({ message: 'Erro ao atualizar a sala de aula' });
        if (!success) return res.status(404).json({ message: 'Sala de aula não encontrada' });
        res.json({ message: 'Sala de aula atualizada com sucesso' });
    });
};

// 5. DeleteSalasDeAula
exports.deleteSalasDeAula = (req, res) => {
    const { id } = req.params;
    salaModel.deleteSalasDeAula(id, (err, success) => {
        if (err) return res.status(500).json({ message: 'Erro ao remover a sala de aula' });
        if (!success) return res.status(404).json({ message: 'Sala de aula não encontrada' });
        res.json({ message: 'Sala de aula removida com sucesso' });
    });
};
