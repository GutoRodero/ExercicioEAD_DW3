const db = require('../config/db');

// Função para retornar todas as salas de aula que não foram removidas
exports.getAllSalasDeAula = (callback) => {
    const sql = 'SELECT * FROM salasdeaula WHERE removido = false';
    db.query(sql, (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
};

// Função para retornar uma sala de aula específica pelo ID, que não foi removida
exports.getSalasDeAulaByID = (id, callback) => {
    const sql = 'SELECT * FROM salasdeaula WHERE salasdeaulaid = ? AND removido = false';
    db.query(sql, [id], (err, results) => {
        if (err) return callback(err, null);
        if (results.length > 0) {
            callback(null, results[0]);
        } else {
            callback(null, null);  // Sala de aula não encontrada
        }
    });
};

// Função para inserir uma nova sala de aula
exports.insertSalasDeAula = (descricao, localizacao, capacidade, callback) => {
    const sql = 'INSERT INTO salasdeaula (descricao, localizacao, capacidade) VALUES (?, ?, ?)';
    db.query(sql, [descricao, localizacao, capacidade], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result.insertId);  // Retorna o ID da nova sala de aula inserida
    });
};

// Função para atualizar uma sala de aula pelo ID
exports.updateSalasDeAula = (id, descricao, localizacao, capacidade, callback) => {
    const sql = 'UPDATE salasdeaula SET descricao = ?, localizacao = ?, capacidade = ? WHERE salasdeaulaid = ? AND removido = false';
    db.query(sql, [descricao, localizacao, capacidade, id], (err, result) => {
        if (err) return callback(err, null);
        if (result.affectedRows > 0) {
            callback(null, true);  // Retorna true se a atualização for bem-sucedida
        } else {
            callback(null, false); // Retorna false se a sala de aula não foi encontrada
        }
    });
};

// Função para realizar soft delete de uma sala de aula pelo ID
exports.deleteSalasDeAula = (id, callback) => {
    const sql = 'UPDATE salasdeaula SET removido = true WHERE salasdeaulaid = ?';
    db.query(sql, [id], (err, result) => {
        if (err) return callback(err, null);
        if (result.affectedRows > 0) {
            callback(null, true);  // Retorna true se a sala de aula foi removida
        } else {
            callback(null, false); // Retorna false se a sala de aula não foi encontrada
        }
    });
};
