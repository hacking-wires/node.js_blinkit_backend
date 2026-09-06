const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

function createApp({ logger = 'dev' } = {}) {
    const app = express();
    app.use(cors());
    app.use(express.json());
    if (logger) app.use(morgan(logger));

    app.use('/api/v1/test', require('./routes/testRoutes'));

    app.get('/', (req, res) => {
        return res.status(200).send('<h1>welcome</h1>');
    });

    return app;
}

module.exports = { createApp };
