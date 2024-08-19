const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');

// Conectar ao MongoDB
mongoose.connect(config.mongoURI)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.log('Erro ao conectar ao MongoDB:', err));

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rotas
const authRoutes = require('./routes/authRoutes');
const tableRoutes = require('./routes/tableRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/table', tableRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
