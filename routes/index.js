const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Daniel DLP')
});

module.exports = routes;