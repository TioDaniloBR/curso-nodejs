const { Router } = require('express');
const newsControllers = require('./controllers/NewsControllers');

const routes = new Router();

routes.get('/news', newsControllers.all);
routes.get('/news/:id', newsControllers.one);
routes.post('/news', newsControllers.save);
routes.put('/news/:id', newsControllers.update);
routes.delete('/news/:id', newsControllers.delete);

module.exports = routes