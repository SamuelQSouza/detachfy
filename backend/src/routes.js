import { Router } from 'express';

const routes = Router();

routes.get('/',(req, res) => {
    res.send({test: "hello world!!!"});
});

module.exports = routes;

