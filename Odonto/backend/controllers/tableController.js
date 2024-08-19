// backend/controllers/tableController.js
const Value = require('../models/Value');

exports.addValue = async (req, res) => {
    try {
        const newValue = new Value(req.body);
        await newValue.save();
        res.status(201).json(newValue);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao adicionar valor' });
    }
};

exports.getAllValues = async (req, res) => {
    try {
        const values = await Value.find();
        res.status(200).json(values);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar valores' });
    }
};
